import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { BusinessName } from '../../domain/model/business-name.value-object';
import { Address } from '../../domain/model/address.value-object';
import { Service } from '../../domain/model/service.entity';
import { ServiceCategory } from '../../domain/model/service-category.enum';
import { ServiceStatus } from '../../domain/model/service-status.enum';
import { BusinessProfileService } from '../../infrastructure/api/business-profile.service';
import { BusinessProfileAssembler } from '../../infrastructure/assemblers/business-profile.assembler';
import { environment } from '../../../../environments/environment';
import { AuthStore } from '../../../auth/application/auth-store';

@Injectable({ providedIn: 'root' })
export class BusinessProfileStore {

    private _profile$ = new BehaviorSubject<BusinessProfile | null>(null);
    private _loading$ = new BehaviorSubject<boolean>(false);
    private _error$ = new BehaviorSubject<string | null>(null);

    readonly profile$ = this._profile$.asObservable();
    readonly loading$ = this._loading$.asObservable();
    readonly error$ = this._error$.asObservable();

    private authStore = inject(AuthStore);

    constructor(
        private businessProfileService: BusinessProfileService,
        private assembler: BusinessProfileAssembler,
        private http: HttpClient
    ) {}

    getCurrentUserId(): string | null {
        return this.authStore.currentUser()?.id ?? null;
    }

    reset(): void {
        this._profile$.next(null);
        this._loading$.next(false);
        this._error$.next(null);
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith('business_profile_')) {
                localStorage.removeItem(key);
            }
        }
    }

    loadProfile(ownerId: string): void {
        this._profile$.next(null);
        this._loading$.next(true);
        this._error$.next(null);

        const user = this.authStore.currentUser();
        const businessId = user?.businessId;

        const profile$ = businessId
            ? this.businessProfileService.getById(businessId)
            : this.businessProfileService.getByOwnerId(ownerId);

        profile$.pipe(
            tap({
                next: (profile) => {
                    if (profile) {
                        this._profile$.next(profile);
                        const resource = this.assembler.toResource(profile);
                        localStorage.setItem(`business_profile_${ownerId}`, JSON.stringify(resource));

                        if (user && profile.id && String(user.businessId) !== String(profile.id)) {
                            this.http.patch(`${environment.baseUrl}/api/v1/users/${user.id}`, {
                                businessId: profile.id
                            }).subscribe({
                                next: () => {
                                    this.authStore.setUser({ ...user, businessId: profile.id });
                                },
                                error: () => {
                                    this.authStore.setUser({ ...user, businessId: profile.id });
                                }
                            });
                        }
                    } else {
                        const savedData = localStorage.getItem(`business_profile_${ownerId}`);
                        if (savedData) {
                            try {
                                const resource = JSON.parse(savedData);
                                const savedProfile = this.assembler.toEntity(resource);
                                this._profile$.next(savedProfile);
                            } catch (e) {
                                console.error('Error parsing saved profile', e);
                                localStorage.removeItem(`business_profile_${ownerId}`);
                            }
                        }
                    }
                    this._loading$.next(false);
                },
                error: (err) => {
                    const savedData = localStorage.getItem(`business_profile_${ownerId}`);
                    if (savedData) {
                        try {
                            const resource = JSON.parse(savedData);
                            const savedProfile = this.assembler.toEntity(resource);
                            this._profile$.next(savedProfile);
                        } catch (e) {
                            console.error('Error parsing saved profile', e);
                            localStorage.removeItem(`business_profile_${ownerId}`);
                        }
                    }
                    this._loading$.next(false);
                }
            })
        ).subscribe();
    }

    /** Reload full profile from server, bypassing local caches */
    refreshFromServer(id: string | number): void {
        this.http.get<Record<string, unknown>>(`${environment.baseUrl}/api/v1/businesses/${id}`).subscribe({
            next: (resource) => {
                const profile = this.assembler.toEntity(resource as any);
                this._profile$.next(profile);
            },
            error: () => console.warn('Could not refresh profile from server')
        });
    }

    updateProfileData(data: {
        publicDisplayName: string;
        category: ServiceCategory;
        description: string;
        phone: string;
        street: string;
        coverImage?: string;
    }): { saved: boolean; sync$: Observable<boolean> } {
        const current = this._profile$.getValue();
        const currentUser = this.authStore.currentUser();

        if (!current) {
            if (!currentUser) {
                return { saved: false, sync$: of(false) };
            }

            const newProfile = new BusinessProfile(
                '',
                new BusinessName(data.publicDisplayName, data.publicDisplayName),
                new Address(data.street, '', ''),
                data.description,
                data.phone,
                data.category,
                true,
                [],
                data.coverImage,
                currentUser.id
            );

            const resource = this.assembler.toResource(newProfile);
            const create$ = this.http.post<any>(`${environment.baseUrl}/api/v1/businesses`, {
                name: data.publicDisplayName,
                category: data.category,
                description: data.description,
                phone: data.phone,
                address: data.street,
                isPublished: true,
                ownerId: Number(currentUser.id),
                coverImage: data.coverImage || null
            }).pipe(
                switchMap(created => {
                    const savedResource = { ...resource, id: created.id };
                    const ownerKey = currentUser.id;
                    localStorage.setItem(`business_profile_${ownerKey}`, JSON.stringify(savedResource));
                    const savedProfile = this.assembler.toEntity(savedResource);
                    this._profile$.next(savedProfile);

                    return this.http.patch(`${environment.baseUrl}/api/v1/users/${currentUser.id}`, {
                        businessId: created.id
                    }).pipe(
                        tap(() => {
                            const updatedUser = { ...currentUser, businessId: created.id };
                            this.authStore.setUser(updatedUser);
                        }),
                        map(() => true),
                        catchError(err => {
                            console.error('Error persisting businessId to user', err);
                            const updatedUser = { ...currentUser, businessId: created.id };
                            this.authStore.setUser(updatedUser);
                            return of(true);
                        })
                    );
                }),
                catchError(err => {
                    console.error('Error creating business profile', err);
                    return of(false);
                })
            );

            return { saved: true, sync$: create$ };
        }

        if (!currentUser || String(current.id) !== String(currentUser.businessId)) {
            return { saved: false, sync$: of(false) };
        }
        if (current.ownerId && String(current.ownerId) !== String(currentUser.id)) {
            return { saved: false, sync$: of(false) };
        }

        const newName = new BusinessName(current.name.legalName, data.publicDisplayName);
        const newAddress = new Address(data.street, current.address.city, current.address.reference);
        const updated = new BusinessProfile(
            current.id,
            newName,
            newAddress,
            data.description,
            data.phone,
            data.category,
            current.isPublished,
            current.services,
            data.coverImage !== undefined ? data.coverImage : current.coverImage,
            current.ownerId || currentUser.id
        );
        this._profile$.next(updated);

        const resource = this.assembler.toResource(updated);
        const ownerKey = current.ownerId || currentUser.id;
        localStorage.setItem(`business_profile_${ownerKey}`, JSON.stringify(resource));

        const url = `${environment.baseUrl}/api/v1/businesses/${updated.id}`;
        const sync$ = this.http.patch(url, {
            name: data.publicDisplayName,
            category: data.category,
            description: data.description,
            phone: data.phone,
            address: data.street,
            isPublished: current.isPublished,
            coverImage: data.coverImage !== undefined ? data.coverImage : current.coverImage
        }).pipe(
            map(() => true),
            catchError(err => {
                console.error('FAILED to sync profile to server');
                console.error('Error status:', err.status);
                console.error('Error message:', err.message);
                return of(false);
            })
        );

        return { saved: true, sync$ };
    }

    getServicesByCategory(category: ServiceCategory): Observable<Service[]> {
        return new Observable(observer => {
            this._profile$.subscribe(profile => {
                if (!profile) { observer.next([]); return; }
                const filtered = profile.services.filter(s => s.category === category);
                observer.next(filtered);
            });
        });
    }

    getFeaturedServices(): Observable<Service[]> {
        return new Observable(observer => {
            this._profile$.subscribe(profile => {
                if (!profile) { observer.next([]); return; }
                observer.next(profile.services.filter(s => s.isFeatured));
            });
        });
    }

    getActiveServices(): Observable<Service[]> {
        return new Observable(observer => {
            this._profile$.subscribe(profile => {
                if (!profile) { observer.next([]); return; }
                observer.next(profile.services.filter(s => s.status === ServiceStatus.ACTIVE));
            });
        });
    }
}
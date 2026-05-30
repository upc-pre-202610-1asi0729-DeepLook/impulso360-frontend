import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

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

    getCurrentUserId(): string {
        return this.authStore.currentUser()?.id || '1';
    }

    loadProfile(ownerId: string): void {
        const savedData = localStorage.getItem(`business_profile_${ownerId}`);
        if (savedData) {
            try {
                const resource = JSON.parse(savedData);
                const profile = this.assembler.toEntity(resource);
                this._profile$.next(profile);
                return;
            } catch (e) {
                console.error('Error parsing saved profile', e);
                localStorage.removeItem(`business_profile_${ownerId}`);
            }
        }

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
                    }
                    this._loading$.next(false);
                },
                error: (err) => {
                    this._error$.next('No se pudo cargar el perfil del negocio');
                    this._loading$.next(false);
                    console.error(err);
                }
            })
        ).subscribe();
    }

    /** Reload full profile from json-server, bypassing local caches */
    refreshFromServer(id: string | number): void {
        this.http.get<Record<string, unknown>>(`${environment.baseUrl}/business-profiles/${id}`).subscribe({
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
        if (!current) {
            console.error('updateProfileData: current profile is null');
            return { saved: false, sync$: of(false) };
        }

        const currentUser = this.authStore.currentUser();
        if (!currentUser || String(current.id) !== String(currentUser.businessId)) {
            console.error('Cannot save: profile does not belong to the current user', {
                profileId: current.id,
                businessId: currentUser?.businessId
            });
            return { saved: false, sync$: of(false) };
        }
        if (current.ownerId && current.ownerId !== currentUser.id) {
            console.error('Cannot save: profile owner does not match current user', {
                profileOwnerId: current.ownerId,
                currentUserId: currentUser.id
            });
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

        // Save to localStorage keyed by ownerId for consistent lookup
        const resource = this.assembler.toResource(updated);
        const ownerKey = current.ownerId || currentUser.id;
        localStorage.setItem(`business_profile_${ownerKey}`, JSON.stringify(resource));

        // Sync to json-server so client view sees the changes
        const baseUrl = environment.baseUrl;
        const url = `${baseUrl}/business-profiles/${updated.id}`;
        const sync$ = this.http.patch(url, resource).pipe(
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
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { BusinessName } from '../../domain/model/business-name.value-object';
import { Address } from '../../domain/model/address.value-object';
import { Service } from '../../domain/model/service.entity';
import { ServiceCategory } from '../../domain/model/service-category.enum';
import { ServiceStatus } from '../../domain/model/service-status.enum';
import { BusinessProfileService } from '../../infrastructure/api/business-profile.service';
import { BusinessProfileAssembler } from '../../infrastructure/assemblers/business-profile.assembler';

@Injectable({ providedIn: 'root' })
export class BusinessProfileStore {

    private _profile$ = new BehaviorSubject<BusinessProfile | null>(null);
    private _loading$ = new BehaviorSubject<boolean>(false);
    private _error$ = new BehaviorSubject<string | null>(null);

    readonly profile$ = this._profile$.asObservable();
    readonly loading$ = this._loading$.asObservable();
    readonly error$ = this._error$.asObservable();

    constructor(
        private businessProfileService: BusinessProfileService,
        private assembler: BusinessProfileAssembler
    ) {}

    loadProfile(ownerId: number): void {
        const currentProfile = this._profile$.getValue();
        if (currentProfile) {
            // Ya está cargado en memoria, no volver a pedir al JSON para no sobreescribir los cambios locales.
            return;
        }

        const savedData = localStorage.getItem(`business_profile_${ownerId}`);
        if (savedData) {
            try {
                const resource = JSON.parse(savedData);
                const profile = this.assembler.toEntity(resource);
                this._profile$.next(profile);
                return;
            } catch (e) {
                console.error('Error parsing saved profile', e);
            }
        }

        this._loading$.next(true);
        this._error$.next(null);

        this.businessProfileService.getByOwnerId(ownerId).pipe(
            tap({
                next: (profile) => {
                    this._profile$.next(profile);
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

    updateProfileData(data: {
        legalName: string;
        publicDisplayName: string;
        category: ServiceCategory;
        description: string;
        phone: string;
        street: string;
        city: string;
        reference: string;
        coverImage?: string;
    }): void {
        const current = this._profile$.getValue();
        if (current) {
            const newName = new BusinessName(data.legalName, data.publicDisplayName);
            const newAddress = new Address(data.street, data.city, data.reference);
            const updated = new BusinessProfile(
                current.id,
                newName,
                newAddress,
                data.description,
                data.phone,
                data.category,
                current.isPublished,
                current.services,
                data.coverImage !== undefined ? data.coverImage : current.coverImage
            );
            this._profile$.next(updated);

            // Save to localStorage
            const resource = this.assembler.toResource(updated);
            localStorage.setItem(`business_profile_${updated.id}`, JSON.stringify(resource));
        }
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
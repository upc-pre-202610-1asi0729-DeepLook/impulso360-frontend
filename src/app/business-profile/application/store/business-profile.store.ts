import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { Service } from '../../domain/model/service.entity';
import { ServiceCategory } from '../../domain/model/service-category.enum';
import { ServiceStatus } from '../../domain/model/service-status.enum';
import { BusinessProfileService } from '../../infrastructure/api/business-profile.service';
@Injectable({ providedIn: 'root' })
export class BusinessProfileStore {

    private _profile$ = new BehaviorSubject<BusinessProfile | null>(null);
    private _loading$ = new BehaviorSubject<boolean>(false);
    private _error$ = new BehaviorSubject<string | null>(null);

    readonly profile$ = this._profile$.asObservable();
    readonly loading$ = this._loading$.asObservable();
    readonly error$ = this._error$.asObservable();

    constructor(private businessProfileService: BusinessProfileService) {}

    loadProfile(ownerId: number): void {
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
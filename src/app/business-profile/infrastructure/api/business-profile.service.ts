import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { BusinessProfileRepository } from '../../domain/model/business-profile.repository';
import { BusinessProfileAssembler } from '../assemblers/business-profile.assembler';
import { BusinessProfileResource } from '../resources/business-profile.resource';

@Injectable({ providedIn: 'root' })
export class BusinessProfileService implements BusinessProfileRepository {

    private readonly dataUrl = '/assets/data/business-profile.json';

    constructor(
        private http: HttpClient,
        private assembler: BusinessProfileAssembler
    ) {}

    getById(id: number): Observable<BusinessProfile | null> {
        return this.http.get<BusinessProfileResource>(this.dataUrl).pipe(
            map(resource => resource.id === id ? this.assembler.toEntity(resource) : null)
        );
    }

    getByOwnerId(_ownerId: number): Observable<BusinessProfile | null> {
        return this.http.get<BusinessProfileResource>(this.dataUrl).pipe(
            map(resource => this.assembler.toEntity(resource))
        );
    }

    // Los siguientes métodos no aplican para JSON estático
    save(_businessProfile: BusinessProfile): Observable<BusinessProfile> {
        throw new Error('No disponible en modo JSON estático');
    }

    update(_businessProfile: BusinessProfile): Observable<BusinessProfile> {
        throw new Error('No disponible en modo JSON estático');
    }

    delete(_id: number): Observable<void> {
        throw new Error('No disponible en modo JSON estático');
    }
}
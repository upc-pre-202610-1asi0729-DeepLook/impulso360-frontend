import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { BusinessProfileRepository } from '../../domain/model/business-profile.repository';
import { BusinessProfileAssembler } from '../assemblers/business-profile.assembler';
import { BusinessProfileResource } from '../resources/business-profile.resource';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BusinessProfileService implements BusinessProfileRepository {

    private http = inject(HttpClient);
    private assembler = inject(BusinessProfileAssembler);

    private get baseUrl(): string {
        return environment.baseUrl;
    }

    getById(id: string | number): Observable<BusinessProfile | null> {
        return this.http.get<BusinessProfileResource>(`${this.baseUrl}/api/v1/businesses/${id}`).pipe(
            map(resource => this.assembler.toEntity(resource))
        );
    }

    getByOwnerId(ownerId: string): Observable<BusinessProfile | null> {
        return this.http.get<BusinessProfileResource[]>(`${this.baseUrl}/api/v1/businesses`, {
            params: { ownerId: ownerId }
        }).pipe(
            map(list => {
                if (list.length === 0) return null;
                return this.assembler.toEntity(list[0]);
            })
        );
    }

    private getCurrentUserBusinessId(): string | null {
        try {
            const raw = localStorage.getItem('impulso360_user');
            if (!raw) return null;
            const user = JSON.parse(raw);
            return user?.businessId ?? null;
        } catch {
            return null;
        }
    }

    save(businessProfile: BusinessProfile): Observable<BusinessProfile> {
        return this.http.post<BusinessProfileResource>(`${this.baseUrl}/api/v1/businesses`, businessProfile).pipe(
            map(resource => this.assembler.toEntity(resource))
        );
    }

    update(businessProfile: BusinessProfile): Observable<BusinessProfile> {
        return this.http.put<BusinessProfileResource>(`${this.baseUrl}/api/v1/businesses/${businessProfile.id}`, businessProfile).pipe(
            map(resource => this.assembler.toEntity(resource))
        );
    }

    delete(_id: string | number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/api/v1/businesses/${_id}`);
    }
}
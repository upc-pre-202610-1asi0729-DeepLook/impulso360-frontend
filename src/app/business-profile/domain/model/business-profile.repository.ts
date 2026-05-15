import { Observable } from 'rxjs';
import { BusinessProfile } from './business-profile.entity';

export interface BusinessProfileRepository {
    getById(id: number): Observable<BusinessProfile | null>;
    getByOwnerId(ownerId: number): Observable<BusinessProfile | null>;
    save(businessProfile: BusinessProfile): Observable<BusinessProfile>;
    update(businessProfile: BusinessProfile): Observable<BusinessProfile>;
    delete(id: number): Observable<void>;
}

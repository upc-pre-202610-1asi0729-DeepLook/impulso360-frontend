import { Observable } from 'rxjs';
import { BusinessProfile } from './business-profile.entity';

export interface BusinessProfileRepository {
    getById(id: string | number): Observable<BusinessProfile | null>;
    getByOwnerId(ownerId: string): Observable<BusinessProfile | null>;
    save(businessProfile: BusinessProfile): Observable<BusinessProfile>;
    update(businessProfile: BusinessProfile): Observable<BusinessProfile>;
    delete(id: string | number): Observable<void>;
}

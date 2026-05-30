import { Observable } from 'rxjs';
import { Service } from './service.entity';

export abstract class ServiceRepository {
    abstract getAll(businessId?: number | string): Observable<Service[]>;
    abstract getById(id: string): Observable<Service | undefined>;
    abstract save(service: Service): Observable<Service>;
    abstract delete(id: string): Observable<void>;
    abstract update(service: Service): Observable<Service>;
}


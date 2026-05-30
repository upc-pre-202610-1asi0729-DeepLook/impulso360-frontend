import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { ServiceDto } from '@app/servicios/application/dtos/service.dto';

@Injectable()
export class GetServicesUseCase {
    constructor(private readonly serviceRepository: ServiceRepository) {}

    execute(businessId?: number | string): Observable<ServiceDto[]> {
        return this.serviceRepository.getAll(businessId).pipe(
            map(services => services.map(s => ({
                id: s.id,
                name: s.name,
                category: s.category,
                description: s.description,
                price: s.price,
                status: s.status,
                isFeatured: s.isFeatured,
                isActive: s.isActive,
                businessId: s.businessId,
            })))
        );
    }
}
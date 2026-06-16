import { Injectable } from '@angular/core';
import { Observable, switchMap, map } from 'rxjs';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { FeaturedServiceDomainService } from '@app/servicios/domain/model/featured-service.domain-service';
import { ServiceDto } from '@app/servicios/application/dtos/service.dto';

@Injectable()
export class ToggleFeatureServiceUseCase {
    constructor(
        private readonly serviceRepository: ServiceRepository,
        private readonly featuredDomainService: FeaturedServiceDomainService
    ) {}

    execute(serviceId: string, businessId?: number | string): Observable<ServiceDto> {
        return this.serviceRepository.getAll(businessId).pipe(
            switchMap(allServices => {
                const target = allServices.find(s => s.id === serviceId);
                if (!target) throw new Error(`Servicio ${serviceId} no encontrado`);

                let updated;
                if (target.isFeatured) {
                    updated = target.unfeature();
                } else {
                    if (!this.featuredDomainService.canFeature(allServices)) {
                        throw new Error('Ya tienes el máximo de 3 servicios destacados.');
                    }
                    updated = target.feature();
                }

                return this.serviceRepository.update(updated).pipe(
                    map(s => ({
                        id: s.id,
                        name: s.name,
                        category: s.category,
                        description: s.description,
                        price: s.price,
                        status: s.status,
                        isFeatured: s.isFeatured,
                        isActive: s.isActive,
                    }))
                );
            })
        );
    }
}
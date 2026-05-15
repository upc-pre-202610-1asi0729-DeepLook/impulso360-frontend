import { Injectable } from '@angular/core';

import { BusinessProfile } from '../../domain/model/business-profile.entity';
import { BusinessName } from '../../domain/model/business-name.value-object';
import { Address } from '../../domain/model/address.value-object';
import { Price } from '../../domain/model/price.value-object';
import { Service } from '../../domain/model/service.entity';
import { ServiceStatus } from '../../domain/model/service-status.enum';
import { ServiceCategory } from '../../domain/model/service-category.enum';

import {
    BusinessProfileResource,
    ServiceResource
} from '../resources/business-profile.resource';

@Injectable({ providedIn: 'root' })
export class BusinessProfileAssembler {

    toEntity(resource: BusinessProfileResource): BusinessProfile {
        const name = new BusinessName(
            resource.name.legalName,
            resource.name.publicDisplayName
        );

        const address = new Address(
            resource.address.street,
            resource.address.city,
            resource.address.reference
        );

        const services = resource.services.map(s => this.toServiceEntity(s));

        return new BusinessProfile(
            resource.id,
            name,
            address,
            resource.description,
            resource.phone,
            resource.category as ServiceCategory,
            resource.isPublished,
            services,
            resource.coverImage
        );
    }

    toResource(entity: BusinessProfile): BusinessProfileResource {
        return {
            id: entity.id,
            name: {
                legalName: entity.name.legalName,
                publicDisplayName: entity.name.publicDisplayName
            },
            address: {
                street: entity.address.street,
                city: entity.address.city,
                reference: entity.address.reference
            },
            description: entity.description,
            phone: entity.phone,
            category: entity.category,
            isPublished: entity.isPublished,
            coverImage: entity.coverImage,
            services: entity.services.map(s => this.toServiceResource(s))
        };
    }

    private toServiceEntity(resource: ServiceResource): Service {
        const price = new Price(
            resource.price.amount,
            resource.price.currency
        );

        return new Service(
            resource.id,
            resource.name,
            resource.description,
            resource.durationMinutes,
            price,
            resource.status as ServiceStatus,
            resource.category as ServiceCategory,
            resource.isFeatured
        );
    }

    private toServiceResource(entity: Service): ServiceResource {
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            durationMinutes: entity.durationMinutes,
            price: {
                amount: entity.price.amount,
                currency: entity.price.currency
            },
            status: entity.status,
            category: entity.category,
            isFeatured: entity.isFeatured
        };
    }
}
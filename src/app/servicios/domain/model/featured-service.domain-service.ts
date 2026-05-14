import { Injectable } from '@angular/core';
import { Service } from './service.entity';

export const MAX_FEATURED_SERVICES = 3;

@Injectable()
export class FeaturedServiceDomainService {
    canFeature(services: Service[]): boolean {
        return this.featuredCount(services) < MAX_FEATURED_SERVICES;
    }

    featuredCount(services: Service[]): number {
        return services.filter(s => s.isFeatured).length;
    }

    isAtLimit(services: Service[]): boolean {
        return this.featuredCount(services) >= MAX_FEATURED_SERVICES;
    }
}


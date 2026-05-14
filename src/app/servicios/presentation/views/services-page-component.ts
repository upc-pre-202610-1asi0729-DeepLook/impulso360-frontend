import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetServicesUseCase } from '@app/servicios/application/get-services.use-case';
import { ToggleFeatureServiceUseCase } from '@app/servicios/application/toggle-feature-service.use-case';
import { FeaturedServiceDomainService, MAX_FEATURED_SERVICES } from '@app/servicios/domain/model/featured-service.domain-service';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { ServiceDto } from '@app/servicios/application/dtos/service.dto';
import { Service } from '@app/servicios/domain/model/service.entity';
import { ServiceCardComponent } from '@app/servicios/presentation/components/service-card-component';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [CommonModule, ServiceCardComponent],
    templateUrl: './services-page-component.html',
    styleUrls: ['./services-page-component.css'],
})
export class ServicesPageComponent implements OnInit {
    services$!: Observable<ServiceDto[]>;
    featuredCount$!: Observable<number>;
    canFeature$!: Observable<boolean>;
    errorMessage: string | null = null;

    readonly maxFeatured = MAX_FEATURED_SERVICES;

    constructor(
        private readonly getServicesUseCase: GetServicesUseCase,
        private readonly toggleFeatureUseCase: ToggleFeatureServiceUseCase,
        private readonly featuredDomainService: FeaturedServiceDomainService,
        private readonly serviceRepository: ServiceRepository
    ) {}

    ngOnInit(): void {
        this.services$ = this.getServicesUseCase.execute();

        this.featuredCount$ = this.serviceRepository.getAll().pipe(
            map((services: Service[]) => this.featuredDomainService.featuredCount(services))
        );

        this.canFeature$ = this.serviceRepository.getAll().pipe(
            map((services: Service[]) => this.featuredDomainService.canFeature(services))
        );
    }

    onToggleFeature(serviceId: string): void {
        this.errorMessage = null;
        this.toggleFeatureUseCase.execute(serviceId).subscribe({
            error: (err) => {
                this.errorMessage = err.message;
                setTimeout(() => this.errorMessage = null, 4000);
            }
        });
    }

    onEdit(serviceId: string): void {
        console.log('Edit service:', serviceId);
    }

    onDelete(serviceId: string): void {
        console.log('Delete service:', serviceId);
    }

    onAddService(): void {
        console.log('Add new service');
    }

    trackById(_: number, service: ServiceDto): string {
        return service.id;
    }
}
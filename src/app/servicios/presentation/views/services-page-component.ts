import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetServicesUseCase } from '@app/servicios/application/get-services.use-case';
import { ToggleFeatureServiceUseCase } from '@app/servicios/application/toggle-feature-service.use-case';
import { FeaturedServiceDomainService, MAX_FEATURED_SERVICES } from '@app/servicios/domain/model/featured-service.domain-service';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { ServiceDto } from '@app/servicios/application/dtos/service.dto';
import { Service } from '@app/servicios/domain/model/service.entity';
import { ServiceCardComponent } from '@app/servicios/presentation/components/service-card-component';
import { ServiceFormComponent } from '@app/servicios/presentation/components/service-form-component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { AuthStore } from '../../../auth/application/auth-store';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [CommonModule, ServiceCardComponent, MatDialogModule, TranslateModule],
    templateUrl: './services-page-component.html',
    styleUrls: ['./services-page-component.css'],
})
export class ServicesPageComponent implements OnInit {
    services$!: Observable<ServiceDto[]>;
    featuredCount$!: Observable<number>;
    canFeature$!: Observable<boolean>;
    errorMessage: string | null = null;

    readonly maxFeatured = MAX_FEATURED_SERVICES;
    private readonly refresh$ = new BehaviorSubject<void>(void 0);
    private readonly authStore = inject(AuthStore);

    constructor(
        private readonly getServicesUseCase: GetServicesUseCase,
        private readonly toggleFeatureUseCase: ToggleFeatureServiceUseCase,
        private readonly featuredDomainService: FeaturedServiceDomainService,
        private readonly serviceRepository: ServiceRepository,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        const businessId = this.authStore.currentUser()?.businessId;

        this.services$ = this.refresh$.pipe(
            switchMap(() => this.getServicesUseCase.execute(businessId))
        );

        this.featuredCount$ = this.refresh$.pipe(
            switchMap(() => this.serviceRepository.getAll(businessId)),
            map((services: Service[]) => this.featuredDomainService.featuredCount(services))
        );

        this.canFeature$ = this.refresh$.pipe(
            switchMap(() => this.serviceRepository.getAll(businessId)),
            map((services: Service[]) => this.featuredDomainService.canFeature(services))
        );
    }

    onToggleFeature(serviceId: string): void {
        this.errorMessage = null;
        const businessId = this.authStore.currentUser()?.businessId;
        this.toggleFeatureUseCase.execute(serviceId, businessId).subscribe({
            next: () => this.refresh$.next(),
            error: (err) => {
                this.errorMessage = err.message;
                setTimeout(() => this.errorMessage = null, 4000);
            }
        });
    }

    onEdit(serviceId: string): void {
        this.serviceRepository.getById(serviceId).subscribe({
            next: (service) => {
                if (!service) return;

                const dialogRef = this.dialog.open(ServiceFormComponent, {
                    width: '500px',
                    data: service.toPlainObject()
                });

                dialogRef.afterClosed().subscribe(result => {
                    if (result) {
                        const updatedService = Service.create({
                            ...service.toPlainObject(),
                            ...result
                        });
                        this.serviceRepository.update(updatedService).subscribe({
                            next: () => this.refresh$.next(),
                            error: (err) => {
                                this.errorMessage = err.error?.message || 'Error al actualizar el servicio';
                                setTimeout(() => this.errorMessage = null, 4000);
                            }
                        });
                    }
                });
            },
            error: (err) => {
                this.errorMessage = err.error?.message || 'Error al cargar el servicio';
                setTimeout(() => this.errorMessage = null, 4000);
            }
        });
    }

    onDelete(serviceId: string): void {
        if (confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
            this.serviceRepository.delete(serviceId).subscribe({
                next: () => this.refresh$.next(),
                error: (err) => {
                    this.errorMessage = err.error?.message || 'Error al eliminar el servicio';
                    setTimeout(() => this.errorMessage = null, 4000);
                }
            });
        }
    }

    onAddService(): void {
        const dialogRef = this.dialog.open(ServiceFormComponent, {
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const businessId = this.authStore.currentUser()?.businessId;
                if (!businessId) {
                    this.errorMessage = 'No se encontró el ID del negocio. Inicie sesión nuevamente.';
                    setTimeout(() => this.errorMessage = null, 4000);
                    return;
                }
                const newService = Service.create({
                    id: Math.random().toString(36).substr(2, 9),
                    ...result,
                    businessId: Number(businessId)
                });
                this.serviceRepository.save(newService).subscribe({
                    next: () => this.refresh$.next(),
                    error: (err) => {
                        this.errorMessage = err.error?.message || 'Error al guardar el servicio';
                        setTimeout(() => this.errorMessage = null, 4000);
                    }
                });
            }
        });
    }

    trackById(_: number, service: ServiceDto): string {
        return service.id;
    }
}
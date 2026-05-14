import { Routes } from '@angular/router';
import { ServiceRepository } from '@app/servicios/domain/model/service.repository';
import { InMemoryServiceRepository } from '@app/servicios/infrastructure/in-memory-service.repository';
import { GetServicesUseCase } from '@app/servicios/application/get-services.use-case';
import { ToggleFeatureServiceUseCase } from '@app/servicios/application/toggle-feature-service.use-case';
import { FeaturedServiceDomainService } from '@app/servicios/domain/model/featured-service.domain-service';

export const SERVICIOS_ROUTES: Routes = [
  {
    path: '',
    providers: [
      { provide: ServiceRepository, useClass: InMemoryServiceRepository },
      GetServicesUseCase,
      ToggleFeatureServiceUseCase,
      FeaturedServiceDomainService,
    ],
    children: [
      {
        path: '',
        loadComponent: () =>
            import('./views/services-page-component').then(m => m.ServicesPageComponent)
      }
    ]
  }
];
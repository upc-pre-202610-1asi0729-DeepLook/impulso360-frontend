/**
 * @summary Main routing configuration for the application.
 */
import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/presentation/components/layout/layout';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('../../src/app/overview/presentation/views/overview.routes').then(m => m.OVERVIEW_ROUTES)
      },
      {
        path: 'agenda',
        loadChildren: () => import('./agenda/presentation/agenda.routes').then(m => m.AGENDA_ROUTES)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./clients/presentation/clients.routes').then(m => m.CLIENTS_ROUTES)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./servicios/presentation/servicios.routes').then(m => m.SERVICIOS_ROUTES)
      },

      {
        path: 'perfil-negocio',
        loadChildren: () => import('./business-profile/presentation/perfil-negocio.routes')
            .then(m => m.PERFIL_NEGOCIO_ROUTES)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('./ayuda/presentation/ayuda.routes').then(m => m.AYUDA_ROUTES)
      },
      {
        path: 'notificaciones',
        loadChildren: () =>
            import('./notifications/presentation/notification.routes').then(m =>
                m.NOTIFICATIONS_ROUTES)
      }
      ]
  },
  { path: '**', redirectTo: '' }
];

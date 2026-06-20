import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/presentation/components/layout/layout';
import { ClientLayoutComponent } from './client-dashboard/presentation/layout/client-layout';
import { authGuard, loginGuard, profileCompletionGuard } from './auth/presentation/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [loginGuard()],
    loadChildren: () => import('./auth/presentation/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [authGuard(['administrador'])],
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [profileCompletionGuard()],
        loadChildren: () =>
          import('./overview/presentation/views/overview.routes').then(m => m.OVERVIEW_ROUTES)
      },
      {
        path: 'agenda',
        canActivate: [profileCompletionGuard()],
        loadChildren: () => import('./agenda/presentation/agenda.routes').then(m => m.AGENDA_ROUTES)
      },
      {
        path: 'clientes',
        canActivate: [profileCompletionGuard()],
        loadChildren: () => import('./clients/presentation/clients.routes').then(m => m.CLIENTS_ROUTES)
      },
      {
        path: 'servicios',
        canActivate: [profileCompletionGuard()],
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
  {
    path: 'cliente',
    component: ClientLayoutComponent,
    canActivate: [authGuard(['cliente'])],
    loadChildren: () =>
      import('./client-dashboard/presentation/client-dashboard.routes').then(m => m.CLIENT_DASHBOARD_ROUTES)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

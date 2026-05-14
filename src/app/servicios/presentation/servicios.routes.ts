/**
 * @summary Routing configuration for the services bounded context.
 */
import { Routes } from '@angular/router';
import { PageTitleViewComponent } from '../../shared/presentation/components/page-title-view/page-title-view.component';

export const SERVICIOS_ROUTES: Routes = [
  { path: '', component: PageTitleViewComponent, data: { titleKey: 'VIEWS.SERVICES' } }
];

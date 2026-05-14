/**
 * @summary Routing configuration for the business profile bounded context.
 */
import { Routes } from '@angular/router';
import { PageTitleViewComponent } from '../../shared/presentation/components/page-title-view/page-title-view.component';

export const PERFIL_NEGOCIO_ROUTES: Routes = [
  { path: '', component: PageTitleViewComponent, data: { titleKey: 'VIEWS.BUSINESS_PROFILE' } }
];

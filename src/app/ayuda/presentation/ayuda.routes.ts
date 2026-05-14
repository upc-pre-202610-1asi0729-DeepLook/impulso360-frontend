/**
 * @summary Routing configuration for the help bounded context.
 */
import { Routes } from '@angular/router';
import { PageTitleViewComponent } from '../../shared/presentation/components/page-title-view/page-title-view.component';

export const AYUDA_ROUTES: Routes = [
  { path: '', component: PageTitleViewComponent, data: { titleKey: 'VIEWS.HELP' } }
];

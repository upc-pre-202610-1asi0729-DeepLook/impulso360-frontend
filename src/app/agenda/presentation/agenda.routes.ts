/**
 * @summary Routing configuration for the agenda context.
 */
import { Routes } from '@angular/router';
import { PageTitleViewComponent } from '../../shared/presentation/components/page-title-view/page-title-view.component';

export const AGENDA_ROUTES: Routes = [
  { path: '', component: PageTitleViewComponent, data: { titleKey: 'VIEWS.AGENDA' } }
];

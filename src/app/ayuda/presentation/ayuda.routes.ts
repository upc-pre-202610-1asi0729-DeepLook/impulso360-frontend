/**
 * @summary Routing configuration for the help bounded context.
 */
import { Routes } from '@angular/router';
import { HelpViewComponent } from './views/help-view/help-view.component';

export const AYUDA_ROUTES: Routes = [
  { path: '', component: HelpViewComponent, data: { titleKey: 'VIEWS.HELP' } }
];
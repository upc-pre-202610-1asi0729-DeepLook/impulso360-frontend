/**
 * @summary Routing configuration for the agenda context.
 */
import { Routes } from '@angular/router';
import { AgendaViewComponent } from './views/agenda-view/agenda-view.component';

export const AGENDA_ROUTES: Routes = [
  { path: '', component: AgendaViewComponent, data: { titleKey: 'VIEWS.AGENDA' } }
];


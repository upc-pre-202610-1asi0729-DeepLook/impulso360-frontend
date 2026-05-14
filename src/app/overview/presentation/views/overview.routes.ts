/**
 * @summary Routing configuration for the overview bounded context.
 */
import { Routes } from '@angular/router';
import { OverviewViewComponent } from './overview-view/overview-view.component';

export const OVERVIEW_ROUTES: Routes = [
    { path: '', component: OverviewViewComponent }
];
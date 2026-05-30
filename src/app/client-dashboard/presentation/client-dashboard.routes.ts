import { Routes } from '@angular/router';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { ClientProfileComponent } from './views/client-profile/client-profile.component';

export const CLIENT_DASHBOARD_ROUTES: Routes = [
  { path: '', component: ClientViewComponent },
  { path: 'mis-citas', component: ClientViewComponent },
  { path: 'perfil', component: ClientProfileComponent }
];

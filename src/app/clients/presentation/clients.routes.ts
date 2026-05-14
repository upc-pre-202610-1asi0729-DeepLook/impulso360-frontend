/**
 * @summary Routing configuration for the clients bounded context.
 */
import { Routes } from '@angular/router';
import {ClientsPageComponent} from "./pages/clients-page/clients-page";

export const CLIENTS_ROUTES: Routes = [
  {
    path: '',
    component: ClientsPageComponent,
    data: { titleKey: 'VIEWS.CLIENTS' }
  }
];
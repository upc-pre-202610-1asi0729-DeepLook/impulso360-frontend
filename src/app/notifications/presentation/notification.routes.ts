/**
 * @summary Routing configuration for the notifications bounded context.
 */
import { Routes } from '@angular/router';
import { NotificationListViewComponent } from './views/notification-list-view-component/notification-list-viewcomponent';

export const NOTIFICATIONS_ROUTES: Routes = [
    { path: '', component: NotificationListViewComponent }
];
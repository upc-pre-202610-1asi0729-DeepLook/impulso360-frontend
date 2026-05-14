/**
 * @summary Notification service — shared application layer.
 * Orquesta los casos de uso: cargar, marcar leída, marcar todas leídas.
 */
import { inject, Injectable } from '@angular/core';
import { NotificationApi } from '../infrastructure/notification-api';
import { NotificationStore } from './notification.store';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private readonly api   = inject(NotificationApi);
    private readonly store = inject(NotificationStore);

    loadAll(): void {
        this.store.setLoading(true);
        this.api.getAll().subscribe({
            next: notifications => {
                this.store.setNotifications(notifications);
                this.store.setLoading(false);
            },
            error: () => this.store.setLoading(false)
        });
    }

    markAsRead(id: number): void {
        this.api.markAsRead(id).subscribe(() => this.store.markAsRead(id));
    }

    markAllAsRead(): void {
        this.api.markAllAsRead().subscribe(() => this.store.markAllAsRead());
    }
}
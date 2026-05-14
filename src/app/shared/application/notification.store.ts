/**
 * @summary Notification store — shared application layer.
 * Estado global de notificaciones usando Angular Signals.
 * Disponible en toda la app (providedIn: 'root').
 */
import { computed, Injectable, signal } from '@angular/core';
import { Notification } from '../domain/model/notification.entity';

@Injectable({ providedIn: 'root' })
export class NotificationStore {
    private readonly _notifications = signal<Notification[]>([]);
    private readonly _isLoading    = signal<boolean>(false);
    private readonly _panelOpen    = signal<boolean>(false);

    // ── Signals públicos (solo lectura) ──────────────────────
    readonly notifications = this._notifications.asReadonly();
    readonly isLoading     = this._isLoading.asReadonly();
    readonly panelOpen     = this._panelOpen.asReadonly();

    // ── Computados ────────────────────────────────────────────
    readonly unreadCount = computed(() =>
        this._notifications().filter(n => !n.read).length
    );

    readonly unreadNotifications = computed(() =>
        this._notifications().filter(n => !n.read)
    );

    readonly alertNotifications = computed(() =>
        this._notifications().filter(n => n.type === 'alert' || n.type === 'pending')
    );

    // ── Mutaciones ────────────────────────────────────────────
    setNotifications(notifications: Notification[]): void {
        this._notifications.set(notifications);
    }

    setLoading(loading: boolean): void {
        this._isLoading.set(loading);
    }

    togglePanel(): void {
        this._panelOpen.update(v => !v);
    }

    closePanel(): void {
        this._panelOpen.set(false);
    }

    markAsRead(id: number): void {
        this._notifications.update(list =>
            list.map(n => n.id === id ? { ...n, read: true } : n)
        );
    }

    markAllAsRead(): void {
        this._notifications.update(list =>
            list.map(n => ({ ...n, read: true }))
        );
    }
}
/**
 * @summary Notification entity — shared domain layer.
 * Represent a system notification (appointment alert, confirmation, cancellation, etc.).
 */
import { BaseEntity } from './base-entity';

export type NotificationType = 'alert' | 'pending' | 'info' | 'cancelled' | 'confirmed' | 'new_client';

export class Notification extends BaseEntity {
    type: NotificationType = 'info';
    title: string = '';
    description: string = '';
    time: string = '';
    read: boolean = false;
    appointmentId?: number;
    clientId?: number;
}
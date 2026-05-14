/**
 * @summary Notification repository contract — shared domain layer.
 * Define las operaciones que la infraestructura debe implementar.
 */
import { Observable } from 'rxjs';
import { Notification } from '../domain/model/notification.entity';

export abstract class NotificationRepository {
    abstract getAll(): Observable<Notification[]>;
    abstract markAsRead(id: number): Observable<Notification>;
    abstract markAllAsRead(): Observable<void>;
}
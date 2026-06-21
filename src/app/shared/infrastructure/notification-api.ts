/**
 * @summary Notification API — shared infrastructure layer.
 * Se conecta al json-server (fake API) en /notifications.
 */
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Notification } from '../domain/model/notification.entity';
import { NotificationAssembler } from "./notification.assembler";

@Injectable({ providedIn: 'root' })
export class NotificationApi {
    private readonly http       = inject(HttpClient);
    private readonly assembler  = inject(NotificationAssembler);
    private readonly baseUrl    = `${environment.baseUrl}/api/v1/notifications`;

    getAll(): Observable<Notification[]> {
        return this.http
            .get<any[]>(this.baseUrl)
            .pipe(map(list => list.map(r => this.assembler.toEntity(r))));
    }

    markAsRead(id: number): Observable<Notification> {
        return this.http
            .patch<any>(`${this.baseUrl}/${id}`, { read: true })
            .pipe(map(r => this.assembler.toEntity(r)));
    }

    /** json-server no tiene endpoint bulk; patch en paralelo */
    markAllAsRead(): Observable<void> {
        return this.getAll().pipe(
            map(list => list.filter(n => !n.read)),
            map(unread => {
                if (unread.length === 0) return;
                forkJoin(
                    unread.map(n =>
                        this.http.patch(`${this.baseUrl}/${n.id}`, { read: true })
                    )
                ).subscribe();
            })
        );
    }
}
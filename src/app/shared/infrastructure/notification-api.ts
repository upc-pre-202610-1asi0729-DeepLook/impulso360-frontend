import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Notification } from '../domain/model/notification.entity';
import { NotificationAssembler } from './notification.assembler';

@Injectable({ providedIn: 'root' })
export class NotificationApi {
    private readonly http      = inject(HttpClient);
    private readonly assembler = inject(NotificationAssembler);

    private get listUrl(): string {
        return environment.production
            ? `${environment.baseUrl}/notifications.json`
            : `${environment.baseUrl}/notifications`;
    }

    private itemUrl(id: number): string {
        return environment.production
            ? `${environment.baseUrl}/notifications/${id}.json`
            : `${environment.baseUrl}/notifications/${id}`;
    }

    private toArray<T>(data: any): T[] {
        if (!data) return [];
        if (Array.isArray(data)) return data as T[];
        return Object.values(data) as T[];
    }

    getAll(): Observable<Notification[]> {
        return this.http.get<any>(this.listUrl).pipe(
            map(data => this.toArray<any>(data).map(r => this.assembler.toEntity(r)))
        );
    }

    markAsRead(id: number): Observable<Notification> {
        return this.http.patch<any>(this.itemUrl(id), { read: true }).pipe(
            map(r => this.assembler.toEntity(r))
        );
    }

    markAllAsRead(): Observable<void> {
        return this.getAll().pipe(
            map(list => {
                const unread = list.filter(n => !n.read);
                if (unread.length === 0) return;
                forkJoin(
                    unread.map(n => this.http.patch(this.itemUrl(n.id!), { read: true }))
                ).subscribe();
            })
        );
    }
}
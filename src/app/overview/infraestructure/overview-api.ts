/**
 * @summary Overview API — overview infrastructure layer.
 * Consume Firebase Realtime Database en producción y json-server en desarrollo.
 */
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseApi } from '@app/shared/infrastructure/base-api';
import { AppointmentSummary } from '../domain/model/appointment-summary.entity';
import { ClientSummary } from '../domain/model/client-summary.entity';
import { OverviewStats } from '../domain/model/overview-stats.entity';
import { AppointmentSummaryAssembler } from './appointment-summary.assembler';
import { ClientSummaryAssembler } from './client-summary.assembler';

@Injectable({ providedIn: 'root' })
export class OverviewApi extends BaseApi {
    private readonly apptAssembler   = inject(AppointmentSummaryAssembler);
    private readonly clientAssembler = inject(ClientSummaryAssembler);

    override get resourcePath(): string { return '/appointments'; }

    /** Convierte respuesta de Firebase (objeto) o json-server (array) a array */
    private toArray<T>(data: any): T[] {
        if (!data) return [];
        if (Array.isArray(data)) return data as T[];
        return Object.values(data) as T[];
    }

    getStats(): Observable<OverviewStats> {
        const url = environment.production
            ? `${this.baseUrl}/appointments.json`
            : `${this.baseUrl}/appointments`;

        return this.http.get<any>(`${url}`).pipe(
            map(data => {
                const list = this.toArray<any>(data);
                const stats = new OverviewStats();
                stats.todayAppointments   = list.length;
                stats.todayVsYesterday    = 2;
                stats.confirmed           = list.filter(a => a.status === 'confirmed').length;
                stats.confirmedPercent    = list.length
                    ? Math.round((stats.confirmed / list.length) * 100) : 0;
                stats.pending             = list.filter(a => a.status === 'pending').length;
                stats.activeClients       = 42;
                stats.newClientsThisMonth = 5;
                return stats;
            })
        );
    }

    getTodayAppointments(): Observable<AppointmentSummary[]> {
        const url = environment.production
            ? `${this.baseUrl}/appointments.json`
            : `${this.baseUrl}/appointments`;

        return this.http.get<any>(url).pipe(
            map(data => this.toArray<any>(data).map(r => this.apptAssembler.toEntity(r)))
        );
    }

    getRecentClients(): Observable<ClientSummary[]> {
        const url = environment.production
            ? `${this.baseUrl}/clients.json`
            : `${this.baseUrl}/clients`;

        return this.http.get<any>(url).pipe(
            map(data => this.toArray<any>(data).map(r => this.clientAssembler.toEntity(r)))
        );
    }

    confirmAppointment(id: number): Observable<any> {
        const url = environment.production
            ? `${this.baseUrl}/appointments/${id}.json`
            : `${this.baseUrl}/appointments/${id}`;
        return this.http.patch(url, { status: 'confirmed' });
    }

    cancelAppointment(id: number): Observable<any> {
        const url = environment.production
            ? `${this.baseUrl}/appointments/${id}.json`
            : `${this.baseUrl}/appointments/${id}`;
        return this.http.patch(url, { status: 'cancelled' });
    }
}
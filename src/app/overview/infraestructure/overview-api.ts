/**
 * @summary Overview API — overview infrastructure layer.
 * Consume el json-server para obtener datos del panel general.
 */
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
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

    getStats(): Observable<OverviewStats> {
        // Se derivan de los appointments; json-server no tiene endpoint de stats
        return this.http.get<any[]>(`${this.baseUrl}/appointments`).pipe(
            map(list => {
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
        return this.http
            .get<any[]>(`${this.baseUrl}/appointments`)
            .pipe(map(list => list.map(r => this.apptAssembler.toEntity(r))));
    }

    getRecentClients(): Observable<ClientSummary[]> {
        return this.http
            .get<any[]>(`${this.baseUrl}/clients`)
            .pipe(map(list => list.map(r => this.clientAssembler.toEntity(r))));
    }

    confirmAppointment(id: number): Observable<any> {
        return this.http.patch(`${this.baseUrl}/appointments/${id}`, { status: 'confirmed' });
    }

    cancelAppointment(id: number): Observable<any> {
        return this.http.patch(`${this.baseUrl}/appointments/${id}`, { status: 'cancelled' });
    }
}
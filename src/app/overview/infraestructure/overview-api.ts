/**
 * @summary Overview API — overview infrastructure layer.
 * Consume el json-server para obtener datos del panel general.
 */
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { AppointmentSummary, AppointmentStatus } from '../domain/model/appointment-summary.entity';
import { ClientSummary } from '../domain/model/client-summary.entity';
import { OverviewStats } from '../domain/model/overview-stats.entity';
import { AppointmentSummaryAssembler } from './appointment-summary.assembler';
import { ClientSummaryAssembler } from './client-summary.assembler';

@Injectable({ providedIn: 'root' })
export class OverviewApi extends BaseApi {
    private readonly apptAssembler   = inject(AppointmentSummaryAssembler);
    private readonly clientAssembler = inject(ClientSummaryAssembler);

    override get resourcePath(): string { return '/appointments'; }

    getStats(businessId?: number | string): Observable<OverviewStats> {
        const apptUrl = businessId
            ? `${this.baseUrl}/api/v1/appointments?businessId=${businessId}`
            : `${this.baseUrl}/api/v1/appointments`;
        const clientsUrl = businessId
            ? `${this.baseUrl}/api/v1/clients?businessId=${businessId}`
            : `${this.baseUrl}/api/v1/clients`;
        return forkJoin({
            appointments: this.http.get<any[]>(apptUrl),
            clients: this.http.get<any[]>(clientsUrl),
        }).pipe(
            map(({ appointments, clients }) => {
                const today = this.formatLocalDate(new Date());
                const now = new Date();
                const currentMonth = now.getMonth();
                const currentYear = now.getFullYear();

                const todayAppts = appointments.filter(a => a.date === today);
                const yesterday = new Date(now);
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = this.formatLocalDate(yesterday);
                const yesterdayAppts = appointments.filter(a => a.date === yesterdayStr);

                const stats = new OverviewStats();
                stats.todayAppointments = todayAppts.length;
                stats.todayVsYesterday = todayAppts.length - yesterdayAppts.length;
                stats.confirmed = todayAppts.filter(a => a.status?.toLowerCase() === 'confirmed').length;
                stats.confirmedPercent = todayAppts.length
                    ? Math.round((stats.confirmed / todayAppts.length) * 100) : 0;
                stats.pending = todayAppts.filter(a => a.status?.toLowerCase() === 'pending').length;

                const clientIdsWithAppts = new Set(
                    appointments
                        .filter(a => a.clientId)
                        .map(a => String(a.clientId))
                );
                stats.activeClients = clientIdsWithAppts.size || clients.length;

                stats.newClientsThisMonth = clients.filter((c: any) => {
                    const created = c.createdAt || c.created_at;
                    if (!created) return false;
                    const d = new Date(created);
                    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
                }).length;

                return stats;
            })
        );
    }

    getTodayAppointments(businessId?: number | string): Observable<AppointmentSummary[]> {
        const url = businessId
            ? `${this.baseUrl}/api/v1/appointments?businessId=${businessId}`
            : `${this.baseUrl}/api/v1/appointments`;
        return this.http.get<any[]>(url).pipe(
            map(list => {
                const today = this.formatLocalDate(new Date());
                const filtered = list.filter(a => a.date === today);
                return filtered.map(r => this.apptAssembler.toEntity(r));
            })
        );
    }

    getRecentClients(businessId?: number | string): Observable<ClientSummary[]> {
        const clientsUrl = businessId
            ? `${this.baseUrl}/api/v1/clients?businessId=${businessId}`
            : `${this.baseUrl}/api/v1/clients`;
        const appointmentsUrl = businessId
            ? `${this.baseUrl}/api/v1/appointments?businessId=${businessId}`
            : `${this.baseUrl}/api/v1/appointments`;
        return forkJoin({
            clients: this.http.get<any[]>(clientsUrl),
            appointments: this.http.get<any[]>(appointmentsUrl),
        }).pipe(
            map(({ clients, appointments }) => {
                const today = this.formatLocalDate(new Date());
                const businessAppointments = appointments.filter(appt => appt.date < today);

                return clients
                    .map(client => {
                        const clientName = this.getClientFullName(client);
                        const pastAppointments = businessAppointments
                            .filter(appt =>
                                (client.id && String(appt.clientId) === String(client.id)) ||
                                this.normalizeName(appt.clientName) === this.normalizeName(clientName)
                            )
                            .sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));

                        const lastAppointment = pastAppointments[0];
                        if (!lastAppointment) return null;

                        return this.clientAssembler.toEntity({
                            id: client.id,
                            initials: this.getInitials(clientName),
                            name: clientName,
                            phone: client.phone || '-',
                            usualService: lastAppointment.service,
                            lastAppointment: lastAppointment.date,
                            status: lastAppointment.status,
                        });
                    })
                    .filter((client): client is ClientSummary => client !== null)
                    .slice(0, 6);
            })
        );
    }

    confirmAppointment(id: string | number): Observable<any> {
        return this.http.patch(`${this.baseUrl}/api/v1/appointments/${id}`, { status: 'confirmed' });
    }

    cancelAppointment(id: string | number): Observable<any> {
        return this.http.patch(`${this.baseUrl}/api/v1/appointments/${id}`, { status: 'cancelled' });
    }

    updateAppointmentStatus(id: string | number, status: AppointmentStatus): Observable<any> {
        return this.http.patch(`${this.baseUrl}/api/v1/appointments/${id}`, { status });
    }

    private formatLocalDate(d: Date): string {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    private getClientFullName(client: any): string {
        const fullName = `${client.firstName ?? ''} ${client.lastName ?? ''}`.trim();
        return fullName || client.name || 'Cliente';
    }

    private getInitials(name: string): string {
        return name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map(part => part[0]?.toUpperCase())
            .join('') || 'CL';
    }

    private normalizeName(name: string): string {
        return name.trim().toLowerCase().replace(/\s+/g, ' ');
    }
}

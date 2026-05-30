/**
 * @summary Overview service — overview application layer.
 * Orquesta la carga de datos del panel general.
 */
import { inject, Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { OverviewApi } from '../infraestructure/overview-api';
import { AuthStore } from '../../auth/application/auth-store';

import { OverviewStore } from './overview.store';
import { AppointmentStatus } from '../domain/model/appointment-summary.entity';

@Injectable({ providedIn: 'root' })
export class OverviewService {
    private readonly api   = inject(OverviewApi);
    private readonly store = inject(OverviewStore);
    private readonly authStore = inject(AuthStore);

    loadAll(): void {
        this.store.setLoading(true);
        const businessId = this.authStore.currentUser()?.businessId;
        forkJoin({
            stats:        this.api.getStats(businessId),
            appointments: this.api.getTodayAppointments(businessId),
            clients:      this.api.getRecentClients(businessId),
        }).subscribe({
            next: ({ stats, appointments, clients }) => {
                this.store.setStats(stats);
                this.store.setAppointments(appointments);
                this.store.setClients(clients);
                this.store.setLoading(false);
            },
            error: () => this.store.setLoading(false),
        });
    }

    confirmAppointment(id: string | number): void {
        this.api.confirmAppointment(id).subscribe(() =>
            this.store.confirmAppointment(id)
        );
    }

    cancelAppointment(id: string | number): void {
        this.api.cancelAppointment(id).subscribe(() =>
            this.store.cancelAppointment(id)
        );
    }

    updateAppointmentStatus(id: string | number, status: AppointmentStatus): void {
        this.api.updateAppointmentStatus(id, status).subscribe(() =>
            this.store.updateAppointmentStatus(id, status)
        );
    }
}

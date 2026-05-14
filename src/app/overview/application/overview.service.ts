/**
 * @summary Overview service — overview application layer.
 * Orquesta la carga de datos del panel general.
 */
import { inject, Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { OverviewApi } from '../infraestructure/overview-api';

import { OverviewStore } from './overview.store';

@Injectable({ providedIn: 'root' })
export class OverviewService {
    private readonly api   = inject(OverviewApi);
    private readonly store = inject(OverviewStore);

    loadAll(): void {
        this.store.setLoading(true);
        forkJoin({
            stats:        this.api.getStats(),
            appointments: this.api.getTodayAppointments(),
            clients:      this.api.getRecentClients(),
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

    confirmAppointment(id: number): void {
        this.api.confirmAppointment(id).subscribe(() =>
            this.store.confirmAppointment(id)
        );
    }

    cancelAppointment(id: number): void {
        this.api.cancelAppointment(id).subscribe(() =>
            this.store.cancelAppointment(id)
        );
    }
}
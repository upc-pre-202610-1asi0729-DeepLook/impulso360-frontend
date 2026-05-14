/**
 * @summary Overview store — overview application layer.
 * Estado del panel general usando Angular Signals.
 */
import { computed, Injectable, signal } from '@angular/core';
import { AppointmentSummary, AppointmentStatus } from '../domain/model/appointment-summary.entity';
import { ClientSummary } from '../domain/model/client-summary.entity';
import { OverviewStats } from '../domain/model/overview-stats.entity';

export type AppointmentFilter = 'all' | AppointmentStatus;

@Injectable({ providedIn: 'root' })
export class OverviewStore {
    private readonly _stats        = signal<OverviewStats>(new OverviewStats());
    private readonly _appointments = signal<AppointmentSummary[]>([]);
    private readonly _clients      = signal<ClientSummary[]>([]);
    private readonly _isLoading    = signal<boolean>(false);
    private readonly _filter       = signal<AppointmentFilter>('all');
    private readonly _selectedDate = signal<Date>(new Date());

    // ── Señales públicas ──────────────────────────────────
    readonly stats        = this._stats.asReadonly();
    readonly clients      = this._clients.asReadonly();
    readonly isLoading    = this._isLoading.asReadonly();
    readonly filter       = this._filter.asReadonly();
    readonly selectedDate = this._selectedDate.asReadonly();

    // ── Computados ────────────────────────────────────────
    readonly filteredAppointments = computed<AppointmentSummary[]>(() => {
        const f = this._filter();
        const all = this._appointments();
        return f === 'all' ? all : all.filter(a => a.status === f);
    });

    readonly nextAlert = computed<AppointmentSummary | null>(() =>
        this._appointments().find(a => a.status === 'pending') ?? null
    );

    // ── Mutaciones ────────────────────────────────────────
    setStats(stats: OverviewStats): void       { this._stats.set(stats); }
    setAppointments(a: AppointmentSummary[]): void { this._appointments.set(a); }
    setClients(c: ClientSummary[]): void       { this._clients.set(c); }
    setLoading(v: boolean): void               { this._isLoading.set(v); }
    setFilter(f: AppointmentFilter): void      { this._filter.set(f); }
    setSelectedDate(d: Date): void             { this._selectedDate.set(d); }

    confirmAppointment(id: number): void {
        this._appointments.update(list =>
            list.map(a => a.id === id ? { ...a, status: 'confirmed' as AppointmentStatus } : a)
        );
    }

    cancelAppointment(id: number): void {
        this._appointments.update(list =>
            list.map(a => a.id === id ? { ...a, status: 'cancelled' as AppointmentStatus } : a)
        );
    }
}
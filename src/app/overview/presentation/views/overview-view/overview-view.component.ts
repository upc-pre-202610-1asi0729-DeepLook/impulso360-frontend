/**
 * @summary Overview view — panel general, presentation layer.
 * Fiel al mockup: KPIs, citas del día, mini-calendario, alerta, clientes recientes.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { OverviewService } from '../../../application/overview.service';
import { OverviewStore, AppointmentFilter } from '../../../application/overview.store';
import { AppointmentSummary } from '../../../domain/model/appointment-summary.entity';

@Component({
    selector: 'app-overview-view',
    standalone: true,
    imports: [MatIconModule, TranslateModule],
    templateUrl: './overview-view.component.html',
    styleUrl: './overview-view.component.scss',
})
export class OverviewViewComponent implements OnInit {
    private readonly service = inject(OverviewService);
    protected readonly store = inject(OverviewStore);

    // ── Mini-calendario ───────────────────────────────────
    protected readonly calendarDays = computed(() => this.buildCalendar(this.store.selectedDate()));
    protected readonly calMonthLabel = computed(() =>
        this.store.selectedDate().toLocaleDateString('es-PE', { month: 'long', year: 'numeric' })
    );

    // ── Hoy ───────────────────────────────────────────────
    protected readonly todayLabel = computed(() =>
        new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    );

    ngOnInit(): void {
        this.service.loadAll();
    }

    // ── Filtro de citas ───────────────────────────────────
    protected setFilter(f: AppointmentFilter): void {
        this.store.setFilter(f);
    }

    protected isFilter(f: AppointmentFilter): boolean {
        return this.store.filter() === f;
    }

    // ── Acciones de cita ──────────────────────────────────
    protected confirm(appt: AppointmentSummary): void {
        this.service.confirmAppointment(appt.id!);
    }

    protected cancel(appt: AppointmentSummary): void {
        this.service.cancelAppointment(appt.id!);
    }

    // ── Navegación calendario ─────────────────────────────
    protected prevMonth(): void {
        const d = new Date(this.store.selectedDate());
        d.setMonth(d.getMonth() - 1);
        this.store.setSelectedDate(d);
    }

    protected nextMonth(): void {
        const d = new Date(this.store.selectedDate());
        d.setMonth(d.getMonth() + 1);
        this.store.setSelectedDate(d);
    }

    // ── Builder calendario ────────────────────────────────
    private buildCalendar(ref: Date): { day: number; current: boolean; today: boolean }[] {
        const year  = ref.getFullYear();
        const month = ref.getMonth();
        const first = new Date(year, month, 1).getDay();
        const days  = new Date(year, month + 1, 0).getDate();
        const todayD = new Date().getDate();
        const todayM = new Date().getMonth();
        const todayY = new Date().getFullYear();

        const cells: { day: number; current: boolean; today: boolean }[] = [];

        // Días del mes anterior
        const prevDays = new Date(year, month, 0).getDate();
        for (let i = first - 1; i >= 0; i--) {
            cells.push({ day: prevDays - i, current: false, today: false });
        }
        // Días del mes actual
        for (let d = 1; d <= days; d++) {
            cells.push({
                day: d,
                current: true,
                today: d === todayD && month === todayM && year === todayY,
            });
        }
        // Completar hasta 42 celdas
        let next = 1;
        while (cells.length < 42) {
            cells.push({ day: next++, current: false, today: false });
        }
        return cells;
    }
}
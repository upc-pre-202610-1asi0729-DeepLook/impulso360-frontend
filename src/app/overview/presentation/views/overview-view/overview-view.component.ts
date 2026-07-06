/**
 * @summary Overview views — panel general, presentation layer.
 * Fiel al mockup: KPIs, citas del día, mini-calendario, alerta, clientes recientes.
 */
import { Component, computed, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { OverviewService } from '../../../application/overview.service';
import { OverviewStore, AppointmentFilter } from '../../../application/overview.store';
import { AppointmentStatus, AppointmentSummary } from '../../../domain/model/appointment-summary.entity';
import { AppointmentFormComponent } from '../../../../agenda/presentation/components/appointment-form/appointment-form.component';
import { AgendaApi } from '../../../../agenda/infrastructure/agenda-api';
import { Appointment } from '../../../../agenda/domain/model/appointment.entity';
import { AuthStore } from '../../../../auth/application/auth-store';

@Component({
    selector: 'app-overview-view',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatDialogModule, TranslateModule],
    templateUrl: './overview-view.component.html',
    styleUrl: './overview-view.component.scss',
})
export class OverviewViewComponent implements OnInit, OnDestroy {
    private readonly service = inject(OverviewService);
    protected readonly store = inject(OverviewStore);
    private readonly translate = inject(TranslateService);
    private readonly dialog = inject(MatDialog);
    private readonly agendaApi = inject(AgendaApi);
    private readonly authStore = inject(AuthStore);
    private readonly router = inject(Router);
    protected readonly currentLang = signal(this.translate.currentLang || 'es');
    protected readonly editingAppointmentId = signal<string | number | null>(null);

    private timerInterval: ReturnType<typeof setInterval> | null = null;
    protected readonly now = signal(new Date());

    protected readonly minutesUntilAlert = computed(() => {
        const alert = this.store.nextAlert();
        if (!alert?.time) return null;
        const [hours, minutes] = alert.time.split(':').map(Number);
        const target = new Date();
        target.setHours(hours, minutes, 0, 0);
        const diffMs = target.getTime() - this.now().getTime();
        return Math.max(0, Math.round(diffMs / 60000));
    });

    protected readonly alertEtaLabel = computed(() => {
        const totalMins = this.minutesUntilAlert();
        if (totalMins == null) return '';
        if (totalMins >= 60) {
            const h = Math.floor(totalMins / 60);
            const m = totalMins % 60;
            return this.translate.instant('OVERVIEW.ALERT.ETA_HOURS', { hours: h, mins: m });
        }
        return this.translate.instant('OVERVIEW.ALERT.ETA', { mins: totalMins });
    });

    // ── Mini-calendario ───────────────────────────────────
    protected readonly calendarDays = computed(() => this.buildCalendar(this.store.selectedDate()));
    protected readonly calMonthLabel = computed(() => {
        const lang = this.currentLang();
        return this.store.selectedDate().toLocaleDateString(lang === 'es' ? 'es-PE' : 'en-US', { month: 'long', year: 'numeric' });
    });

    // ── Hoy ───────────────────────────────────────────────
    protected readonly todayLabel = computed(() => {
        const lang = this.currentLang();
        return new Date().toLocaleDateString(lang === 'es' ? 'es-PE' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    });

    ngOnInit(): void {
        this.service.loadAll();
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang.set(event.lang);
        });
        this.timerInterval = setInterval(() => this.now.set(new Date()), 60000);
    }

    ngOnDestroy(): void {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    protected navigateToAgenda(): void {
        this.router.navigate(['/agenda']);
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

    protected toggleStatusEditor(appt: AppointmentSummary): void {
        this.editingAppointmentId.update(id => id === appt.id ? null : appt.id!);
    }

    protected updateStatus(appt: AppointmentSummary, status: AppointmentStatus): void {
        this.service.updateAppointmentStatus(appt.id!, status);
        this.editingAppointmentId.set(null);
    }

    protected openNewAppointmentForm(): void {
        const dialogRef = this.dialog.open(AppointmentFormComponent, {
            width: '800px',
            maxWidth: '95vw',
            panelClass: 'appointment-form-dialog'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const d = result.date instanceof Date ? result.date : new Date(result.date);
                const localDate = this.formatLocalDate(d);

                const newAppointment: Partial<Appointment> = {
                    date: localDate,
                    time: result.time,
                    clientName: result.client,
                    service: result.service,
                    category: 'Veterinaria',
                    status: result.status,
                    note: result.notes,
                    businessId: this.authStore.currentUser()?.businessId
                };

                this.agendaApi.createAppointment(newAppointment).subscribe({
                    next: () => {
                        this.service.loadAll(); // Recargar datos del panel
                    },
                    error: (err) => {
                        console.error('Error al guardar la cita:', err);
                    }
                });
            }
        });
    }

    private formatLocalDate(d: Date): string {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const dayNum = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${dayNum}`;
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

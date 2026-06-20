/**
 * @summary Notification list views — notifications presentation layer.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationStore } from '../../../../shared/application/notification.store';
import { NotificationService } from '../../../../shared/application/notification.service';
import { Notification } from '../../../../shared/domain/model/notification.entity';
import { AgendaApi } from '../../../../agenda/infrastructure/agenda-api';
import { AuthStore } from '../../../../auth/application/auth-store';

type FilterTab = 'all' | 'unread' | 'alerts';

@Component({
  selector: 'app-notification-list-views-components',
  standalone: true,
  imports: [MatIconModule, TranslateModule],
  templateUrl: './notification-list-view-component.html',
  styleUrl: './notification-list-view.component.scss'
})
export class NotificationListViewComponent implements OnInit {
  private readonly service = inject(NotificationService);
  protected readonly store = inject(NotificationStore);
  private readonly agendaApi = inject(AgendaApi);
  private readonly authStore = inject(AuthStore);

  protected readonly activeTab = signal<FilterTab>('all');

  // Resumen del día — counts from actual appointments
  protected readonly pendingCount   = signal(0);
  protected readonly confirmedCount = signal(0);
  protected readonly cancelledCount = signal(0);

  // Alertas config (solo UI local, sin backend)
  protected readonly alertConfig = signal({
    proximaCita: true,
    citasPendientes: true,
    resumenDiario: false,
    citasManiana: true,
  });

  protected readonly filteredNotifications = computed<Notification[]>(() => {
    const tab = this.activeTab();
    const all = this.store.notifications();
    if (tab === 'unread')  return all.filter(n => !n.read);
    if (tab === 'alerts')  return all.filter(n => n.type === 'alert' || n.type === 'pending');
    return all;
  });

  ngOnInit(): void {
    this.service.loadAll();
    this.loadTodaySummary();
  }

  private loadTodaySummary(): void {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const user = this.authStore.currentUser();
    const businessId = user?.businessId;

    this.agendaApi.getAllAppointments(businessId).subscribe(appointments => {
      const todayAppointments = appointments.filter((a: any) => a.date === todayStr);
      this.pendingCount.set(todayAppointments.filter((a: any) => a.status === 'pending').length);
      this.confirmedCount.set(todayAppointments.filter((a: any) => a.status === 'confirmed').length);
      this.cancelledCount.set(todayAppointments.filter((a: any) => a.status === 'cancelled').length);
    });
  }

  protected setTab(tab: FilterTab): void {
    this.activeTab.set(tab);
  }

  protected markAllAsRead(): void {
    this.service.markAllAsRead();
  }

  protected markAsRead(id: number): void {
    this.service.markAsRead(id);
  }

  protected toggleAlert(key: keyof ReturnType<typeof this.alertConfig>): void {
    this.alertConfig.update(cfg => ({ ...cfg, [key]: !cfg[key] }));
  }

  /** Icono según tipo de notificación */
  protected iconForType(type: string): string {
    const map: Record<string, string> = {
      alert:      'schedule',
      pending:    'pending_actions',
      info:       'event',
      cancelled:  'close',
      confirmed:  'check_circle',
      new_client: 'person_add',
    };
    return map[type] ?? 'notifications';
  }
}
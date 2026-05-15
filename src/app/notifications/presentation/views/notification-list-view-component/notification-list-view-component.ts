/**
 * @summary Notification list views — notifications presentation layer.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationStore } from '../../../../shared/application/notification.store';
import { NotificationService } from '../../../../shared/application/notification.service';
import { Notification } from '../../../../shared/domain/model/notification.entity';

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

  protected readonly activeTab = signal<FilterTab>('all');

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

  // Resumen del día
  protected readonly pendingCount   = computed(() =>
      this.store.notifications().filter(n => n.type === 'pending' && !n.read).length
  );
  protected readonly confirmedCount = computed(() =>
      this.store.notifications().filter(n => n.type === 'confirmed').length
  );
  protected readonly cancelledCount = computed(() =>
      this.store.notifications().filter(n => n.type === 'cancelled').length
  );

  ngOnInit(): void {
    this.service.loadAll();
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
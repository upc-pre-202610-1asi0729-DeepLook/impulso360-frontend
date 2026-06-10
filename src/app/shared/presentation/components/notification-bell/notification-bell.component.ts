/**
 * @summary Notification bell — shared presentation layer.
 * Campana global en el header: muestra badge con no leídas,
 * al hacer clic navega a /notificaciones.
 */
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NotificationStore } from '../../../application/notification.store';
import { NotificationService } from '../../../application/notification.service';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './notification-bell.component.html',
  styleUrl: './notification-bell.component.scss'
})
export class NotificationBellComponent implements OnInit {
  private readonly router  = inject(Router);
  private readonly service = inject(NotificationService);

  protected readonly store = inject(NotificationStore);

  ngOnInit(): void {
    this.service.loadAll();
  }

  protected goToNotifications(): void {
    this.router.navigate(['/admin/notificaciones']);
  }
}
/**
 * @summary Main layout components providing the application shell.
 */
import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarUserProfileComponent } from '../sidebar-user-profile/sidebar-user-profile.component';
import { NotificationBellComponent } from '../notification-bell/notification-bell.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    SidebarUserProfileComponent,
    NotificationBellComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {
  private readonly translate = inject(TranslateService);

  /**
   * Contador del badge junto a Agenda (p. ej. citas pendientes). Sustituir por datos reales cuando existan.
   */
  protected readonly agendaNavBadgeCount = signal(0);

  protected readonly currentLang = signal(this.translate.getCurrentLang() ?? 'es');

  constructor() {
    this.translate.onLangChange.subscribe(ev => this.currentLang.set(ev.lang));
  }

  protected setLanguage(lang: string): void {
    if (lang === this.currentLang()) {
      return;
    }
    this.translate.use(lang).subscribe(() => this.currentLang.set(lang));
  }
}
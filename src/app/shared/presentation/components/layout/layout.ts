import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarUserProfileComponent } from '../sidebar-user-profile/sidebar-user-profile.component';
import { NotificationBellComponent } from '../notification-bell/notification-bell.component';
import { AuthStore } from '../../../../auth/application/auth-store';
import { AuthService } from '../../../../auth/application/auth.service';

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
  private readonly authStore = inject(AuthStore);
  private readonly authService = inject(AuthService);

  protected readonly agendaNavBadgeCount = signal(0);
  protected readonly currentLang = signal(this.translate.getCurrentLang() ?? 'es');
  protected readonly userName = this.authStore.userName;

  constructor() {
    this.translate.onLangChange.subscribe(ev => this.currentLang.set(ev.lang));
  }

  protected setLanguage(lang: string): void {
    if (lang === this.currentLang()) {
      return;
    }
    this.translate.use(lang).subscribe(() => this.currentLang.set(lang));
  }

  protected logout(): void {
    this.authService.logout();
  }
}

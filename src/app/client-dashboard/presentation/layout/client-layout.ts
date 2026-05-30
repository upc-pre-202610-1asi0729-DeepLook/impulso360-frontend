import { Component, inject, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthStore } from '../../../auth/application/auth-store';
import { AuthService } from '../../../auth/application/auth.service';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './client-layout.html',
  styleUrl: './client-layout.scss'
})
export class ClientLayoutComponent {
  private readonly translate = inject(TranslateService);
  private readonly authStore = inject(AuthStore);
  private readonly authService = inject(AuthService);

  protected readonly currentLang = signal(this.translate.getCurrentLang() ?? 'es');
  protected readonly userName = computed(() => this.authStore.currentUser()?.name ?? '');
  protected readonly userAvatar = computed(() => this.userName().charAt(0).toUpperCase());

  constructor() {
    this.translate.onLangChange.subscribe(ev => this.currentLang.set(ev.lang));
  }

  protected setLanguage(lang: string): void {
    if (lang === this.currentLang()) return;
    this.translate.use(lang).subscribe(() => this.currentLang.set(lang));
  }

  protected logout(): void {
    this.authService.logout();
  }
}

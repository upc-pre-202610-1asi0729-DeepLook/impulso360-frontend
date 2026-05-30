import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthStore } from '../../../../auth/application/auth-store';

@Component({
  selector: 'app-sidebar-user-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sidebar-user-profile.component.html',
  styleUrl: './sidebar-user-profile.component.scss'
})
export class SidebarUserProfileComponent {
  private authStore = inject(AuthStore);
  protected userName = this.authStore.userName;
  protected userRole = this.authStore.role;
}

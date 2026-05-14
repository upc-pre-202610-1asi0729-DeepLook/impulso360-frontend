/**
 * @summary Bloque de perfil de usuario en la barra lateral (visible en todas las vistas).
 */
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-user-profile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sidebar-user-profile.component.html',
  styleUrl: './sidebar-user-profile.component.scss'
})
export class SidebarUserProfileComponent {}

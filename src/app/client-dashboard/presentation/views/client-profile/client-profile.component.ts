import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { AuthStore } from '../../../../auth/application/auth-store';
import { AuthApi } from '../../../../auth/infrastructure/auth-api';
import { ClientApiService } from '../../../../clients/infrastructure/client-api.service';

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.scss'
})
export class ClientProfileComponent {
  private authStore = inject(AuthStore);
  private authApi = inject(AuthApi);
  private clientApi = inject(ClientApiService);

  saving = signal(false);
  success = signal(false);
  error = signal('');

  form = {
    name: this.authStore.currentUser()?.name ?? '',
    email: this.authStore.currentUser()?.email ?? '',
    phone: this.authStore.currentUser()?.phone ?? ''
  };

  save(): void {
    const user = this.authStore.currentUser();
    if (!user || !this.form.name.trim()) {
      this.error.set('El nombre es obligatorio');
      return;
    }

    this.saving.set(true);
    this.success.set(false);
    this.error.set('');

    const nameParts = this.form.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    this.authApi.updateUser(user.id!, {
      name: this.form.name.trim(),
      phone: this.form.phone.trim()
    }).subscribe({
      next: (updated) => {
        this.authStore.setUser(updated);

        this.clientApi.getAll().subscribe(allClients => {
          const matches = allClients.filter(c => c.email === user.email);
          if (matches.length === 0) {
            this.saving.set(false);
            this.success.set(true);
            return;
          }
          let completed = 0;
          for (const client of matches) {
            this.clientApi.update(client.id, {
              firstName,
              lastName,
              phone: this.form.phone.trim()
            }).subscribe({
              next: () => {
                completed++;
                if (completed === matches.length) {
                  this.saving.set(false);
                  this.success.set(true);
                }
              },
              error: () => {
                completed++;
                if (completed === matches.length) {
                  this.saving.set(false);
                  this.success.set(true);
                }
              }
            });
          }
        });
      },
      error: () => {
        this.saving.set(false);
        this.error.set('Error al guardar los cambios.');
      }
    });
  }
}

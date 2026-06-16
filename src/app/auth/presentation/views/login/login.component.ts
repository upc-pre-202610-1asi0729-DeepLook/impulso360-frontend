import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../../application/auth.service';
import { AuthStore } from '../../../application/auth-store';

type AuthMode = 'login' | 'register';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private authStore = inject(AuthStore);
  private router = inject(Router);

  mode = signal<AuthMode>('login');

  loginModel = { email: '', password: '' };
  registerModel = { name: '', email: '', password: '', confirmPassword: '', role: 'cliente' as 'cliente' | 'administrador', phone: '' };

  loading = signal(false);
  errorMessage = signal('');

  registerErrors = signal<{ email?: string }>({});

  emailError = computed(() => this.registerErrors().email);

  constructor() {
    if (this.authStore.isLoggedIn()) {
      this.redirectAfterLogin();
    }
  }

  switchMode(m: AuthMode): void {
    this.mode.set(m);
    this.errorMessage.set('');
    this.registerErrors.set({});
  }

  validateEmail(): void {
    const email = this.registerModel.email;
    if (!email) {
      this.registerErrors.set({});
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      this.registerErrors.set({ email: 'Ingrese un correo electrónico válido' });
    } else {
      this.registerErrors.set({});
    }
  }

  onLogin(): void {
    if (!this.loginModel.email || !this.loginModel.password) {
      this.errorMessage.set('Por favor complete todos los campos');
      return;
    }
    this.loading.set(true);
    this.errorMessage.set('');
    this.authService.login(this.loginModel.email, this.loginModel.password).subscribe(res => {
      this.loading.set(false);
      if (res.success) {
        this.redirectAfterLogin();
      } else {
        this.errorMessage.set(res.message || 'Error al iniciar sesión');
      }
    });
  }

  onRegister(): void {
    const { name, email, password, confirmPassword, role, phone } = this.registerModel;
    if (!name || !email || !password || !confirmPassword) {
      this.errorMessage.set('Por favor complete todos los campos obligatorios');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      this.errorMessage.set('Ingrese un correo electrónico válido');
      return;
    }
    if (password !== confirmPassword) {
      this.errorMessage.set('Las contraseñas no coinciden');
      return;
    }
    if (password.length < 6) {
      this.errorMessage.set('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    this.loading.set(true);
    this.errorMessage.set('');
    this.authService.register({ name, email, password, role, phone }).subscribe(res => {
      this.loading.set(false);
      if (res.success) {
        this.redirectAfterLogin();
      } else {
        this.errorMessage.set(res.message || 'Error al registrarse');
      }
    });
  }

  private redirectAfterLogin(): void {
    const user = this.authStore.currentUser();
    if (user?.role === 'administrador') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/cliente']);
    }
  }
}

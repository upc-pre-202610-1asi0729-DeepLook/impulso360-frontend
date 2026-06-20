import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, catchError, of, switchMap } from 'rxjs';
import { AuthApi } from '../infrastructure/auth-api';
import { AuthStore } from './auth-store';
import { AuthResponse } from '../domain/models/auth-response';
import { User } from '../domain/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authApi = inject(AuthApi);
  private authStore = inject(AuthStore);
  private router = inject(Router);

  login(email: string, password: string): Observable<AuthResponse> {
    return this.authApi.login(email, password).pipe(
      switchMap(user => {
        if (!user) {
          return of({ success: false, message: 'Credenciales inválidas' });
        }
        this.authStore.setUser(user);
        return of({ success: true, user });
      }),
      catchError(() => of({ success: false, message: 'Error de conexión' }))
    );
  }

  register(data: { name: string; email: string; password: string; role: 'cliente' | 'administrador'; phone?: string }): Observable<AuthResponse> {
    return this.authApi.checkEmailExists(data.email).pipe(
      map(exists => {
        if (exists) {
          return { success: false, message: 'El correo ya está registrado' } as AuthResponse;
        }
        return null;
      }),
      switchMap(error => {
        if (error) return of(error);
        return this.authApi.register(data as Omit<User, 'id'>).pipe(
          switchMap(user => {
            this.authStore.setUser(user);
            return of({ success: true, user } as AuthResponse);
          }),
          catchError(() => of({ success: false, message: 'Error al registrar' }))
        );
      })
    );
  }

  logout(): void {
    this.authStore.logout();
    this.router.navigate(['/login']);
  }

  redirectBasedOnRole(): void {
    const user = this.authStore.currentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    if (user.role === 'administrador') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/cliente']);
    }
  }
}

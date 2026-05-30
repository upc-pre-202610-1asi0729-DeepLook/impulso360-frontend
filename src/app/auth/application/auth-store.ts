import { Injectable, signal, computed } from '@angular/core';
import { User, UserRole } from '../domain/models/user';

const STORAGE_KEY = 'impulso360_user';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private currentUserSignal = signal<User | null>(this.loadFromStorage());

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.currentUserSignal() !== null);
  readonly role = computed<UserRole | null>(() => this.currentUserSignal()?.role ?? null);
  readonly isAdmin = computed(() => this.role() === 'administrador');
  readonly isClient = computed(() => this.role() === 'cliente');
  readonly userName = computed(() => this.currentUserSignal()?.name ?? '');

  setUser(user: User | null): void {
    this.currentUserSignal.set(user);
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  logout(): void {
    this.setUser(null);
  }

  private loadFromStorage(): User | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }
}

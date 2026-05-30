import { inject } from '@angular/core';
import { Router, type CanActivateFn, type CanMatchFn } from '@angular/router';
import { AuthStore } from '../../application/auth-store';

export function authGuard(allowedRoles?: ('cliente' | 'administrador')[]): CanActivateFn {
  return () => {
    const authStore = inject(AuthStore);
    const router = inject(Router);
    if (!authStore.isLoggedIn()) {
      return router.parseUrl('/login');
    }
    if (allowedRoles && !allowedRoles.includes(authStore.role()!)) {
      return router.parseUrl('/login');
    }
    return true;
  };
}

export function loginGuard(): CanActivateFn {
  return () => {
    const authStore = inject(AuthStore);
    const router = inject(Router);
    if (authStore.isLoggedIn()) {
      if (authStore.isAdmin()) {
        return router.parseUrl('/admin');
      }
      return router.parseUrl('/cliente');
    }
    return true;
  };
}

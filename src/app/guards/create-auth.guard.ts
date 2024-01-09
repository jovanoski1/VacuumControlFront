import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const createAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('canCreateUsers') || localStorage.getItem('canCreateUsers')==='false') {
    return false;
  }
  return true;
};

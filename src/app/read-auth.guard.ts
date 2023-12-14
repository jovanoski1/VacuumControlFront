import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const readAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('canReadUsers') || localStorage.getItem('canReadUsers')==='false') {
    return false;
  }
  return true;
};

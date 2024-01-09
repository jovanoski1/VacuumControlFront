import { CanActivateFn } from '@angular/router';

export const createAuthGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('permissions')?.includes('can_create_users')){
    return false;
  }
  return true;
};

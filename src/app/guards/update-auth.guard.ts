import { CanActivateFn } from '@angular/router';

export const updateAuthGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('permissions')?.includes('can_update_users')){
    return false;
  }
  return true;
};

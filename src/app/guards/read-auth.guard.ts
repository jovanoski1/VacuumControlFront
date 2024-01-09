import { CanActivateFn } from '@angular/router';

export const readAuthGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('permissions')?.includes('can_read_users')){
    return false;
  }
  return true;
};

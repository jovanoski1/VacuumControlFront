import { CanActivateFn } from '@angular/router';

export const createVacuumGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('permissions')?.includes('can_add_vacuum')){
    return false;
  }
  return true;
};
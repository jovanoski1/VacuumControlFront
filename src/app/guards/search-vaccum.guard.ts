import { CanActivateFn } from '@angular/router';

export const searchVaccumGuard: CanActivateFn = (route, state) => {
  if(!localStorage.getItem('permissions')?.includes('can_search_vacuum')){
    return false;
  }
  return true;
};

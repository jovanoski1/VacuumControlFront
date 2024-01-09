import { CanActivateFn } from '@angular/router';

export const searchVaccumGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('canSearchVacuum') || localStorage.getItem('canSearchVacuum')==='false') {
    return false;
  }
  return true;
};

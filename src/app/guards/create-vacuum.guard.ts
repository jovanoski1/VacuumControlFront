import { CanActivateFn } from '@angular/router';

export const createVacuumGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('canAddVacuum') || localStorage.getItem('canAddVacuum')==='false') {
    return false;
  }
  return true;
};

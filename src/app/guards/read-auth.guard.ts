import { CanActivateFn } from '@angular/router';

export const readAuthGuard: CanActivateFn = (route, state) => {

  if (!localStorage.getItem('canReadUsers') || localStorage.getItem('canReadUsers')==='false') {
    return false;
  }
  return true;
};

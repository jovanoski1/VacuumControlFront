import { CanActivateFn } from '@angular/router';

export const updateAuthGuard: CanActivateFn = (route, state) => {

  if (!localStorage.getItem('canUpdateUsers') || localStorage.getItem('canUpdateUsers')==='false') {
    return false;
  }
  return true;
};

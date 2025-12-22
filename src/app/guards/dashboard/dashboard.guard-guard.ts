import { CanActivateFn } from '@angular/router';

export const dashboardGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

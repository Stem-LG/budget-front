import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let r = inject(Router);
  let auth = inject(AuthService);

  const logged_in = auth.isLoggedIn();

  if (logged_in && route.routeConfig.path != "login") {
    return true;
  } else if (logged_in && route.routeConfig.path == "login") {
    return r.navigateByUrl("/dashboard");
  } else if (!logged_in && route.routeConfig.path != "login") {
    return r.navigateByUrl("/login");
  }
  return true;
};

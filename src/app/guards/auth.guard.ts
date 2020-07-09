import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/core';
import { CORE_ROUTES } from 'src/app/routes/core/core.routes';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot) {
    const user = this._authService.user;

    if (!user) {
      const me = await this._authService.me();
      if (!me || !me.roles.includes(route.data.expectedRole)) {
        return this._router.navigateByUrl(CORE_ROUTES.AUTH.path);
      }
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/core';
import { CORE_ROUTES } from 'src/app/routes/core/core.routes';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    const user = this._authService.user;

    if (!user) {
      return this._router.navigate([CORE_ROUTES.AUTH.path]);
    }

    return true;
  }
}

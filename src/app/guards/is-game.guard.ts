import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { GamesService } from '../services/game';
import { CLIENT_ROUTES } from '../routes/client/client.routes';

/**
 * Guard for auth
 * * Use AuthService
 * * canActive if auth.isAuthenticated and expectedRole === auth.role
 */
@Injectable()
export class IsGameGuard implements CanActivate {
  constructor(private _gamesService: GamesService, private _router: Router) {}
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const id = route.paramMap.get('id');

    const isGame = await this._gamesService.getOne({ id });

    if (!isGame) {
      this._router.navigateByUrl(CLIENT_ROUTES.GAMES.fullPath);
      return false;
    }

    return true;
  }
}

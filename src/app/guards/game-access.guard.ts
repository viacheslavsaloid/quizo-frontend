import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { GamesService } from '../services/game';
import { CLIENT_ROUTES } from '../routes/client/client.routes';

@Injectable()
export class GameAccessGuard implements CanActivate {
  constructor(public _gamesService: GamesService, public router: Router) {}
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const id = route.paramMap.get('id');
    const res = await this._gamesService.hasAccess({ id });

    if (!res?.access) {
      this.router.navigate([CLIENT_ROUTES.GAME_AUTH.fullPath.replace(':id', id)]);
    }

    return res?.access;
  }
}

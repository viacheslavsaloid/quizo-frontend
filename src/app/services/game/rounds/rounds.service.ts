import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService, AppPopupService } from '../../core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'src/app/routes/admin/auth.routes';
import { Round, Game } from 'src/app/models/game';
import { GamesService } from '../games/games.service';
import { RoundsState } from 'src/app/store/states/games';

@Injectable()
export class RoundsService extends CrudService<Round> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _roundState: RoundsState,
    protected _appPopupService: AppPopupService,

    private _gamesService: GamesService
  ) {
    super(_apiService, _appPopupService, _roundState, _router, environment.roundsEndpoint, '', 'round');
  }

  public async toogle(id) {
    try {
      const round = await this.getOne({ id });

      const { data } = await this._apiService.post<{ activeRound: string }>(`${this._apiEndpoint + id}/toogle`, {});

      this._gamesService.updateOne({
        id: round.game.id,
        changes: { ...round.game, ...data },
        local: true,
      });
    } catch (err) {
      console.error(err);
    }
  }

  public navigateToRound(game: Game, round: Round) {
    this._router.navigate([
      ADMIN_ROUTES[`${game.type.toUpperCase()}_ROUND`].fullPath
        .replace(':gameId', game.id)
        .replace(':roundId', round.id),
    ]);
  }
}

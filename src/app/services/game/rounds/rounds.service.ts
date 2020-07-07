import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService, AppPopupService } from '../../core';
import { environment } from 'src/environments/environment';
import { RoundsState } from 'src/app/store/states/admin';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'src/app/routes/admin/auth.routes';
import { Round, Game } from 'src/app/models/game';
import { GamesService } from '../games/games.service';

@Injectable()
export class RoundsService extends CrudService<Round> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _roundState: RoundsState,
    protected _appPopupService: AppPopupService,

    private _gamesService: GamesService
  ) {
    super(
      _apiService,
      _appPopupService,
      _roundState,
      _router,
      environment.roundsEndpoint,
      ADMIN_ROUTES.QUEST.fullPath,
      'round'
    );
  }

  public async toogle(params) {
    try {
      const { gameId, id } = params;
      const game = await this._gamesService.getOne({ id: gameId });

      const res = await this._apiService.post<{ activeRound: string }>(`${environment.roundsEndpoint + id}/toogle`, {});

      game.activeRound = res.data.activeRound;
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

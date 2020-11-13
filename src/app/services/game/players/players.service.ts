import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService, AppPopupService } from '../../core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'src/app/routes/admin/admin.routes';
import {
  RegisterToGameArgs,
  RegisterToGameResponse,
  GiveAccessResponse,
  GiveAccessArgs,
  GenerateTokenResponse,
  GenerateTokenArgs,
  HasAccessResponse,
  HasAccessArgs,
  Game,
} from 'src/app/models/game';
import { CLIENT_ROUTES } from 'src/app/routes/client/client.routes';
import { Player } from '../../../models/game/player.model';
import { PlayersState } from '../../../store/states/games/players.state';

@Injectable()
export class PlayersService extends CrudService<Player> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _playersState: PlayersState,
    protected _appPopupService: AppPopupService
  ) {
    super(_apiService, _appPopupService, _playersState, _router, environment.playersEndpoint, '', 'player');
  }

  public async registerToGame(args: RegisterToGameArgs): Promise<RegisterToGameResponse> {
    try {
      const { id, token } = args;

      const { data } = await this._apiService.post<boolean>(this._apiEndpoint + id + '/signup', { token });

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async giveAccess(args: GiveAccessArgs): Promise<GiveAccessResponse> {
    try {
      const { game, user } = args;
      const { data } = await this._apiService.post<boolean>(this._apiEndpoint + game.id + '/access', user);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async generateToken(args: GenerateTokenArgs): Promise<GenerateTokenResponse> {
    try {
      const { id } = args;
      const { data } = await this._apiService.post<{ token: string }>(this._apiEndpoint + id + '/generate', {});

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async hasAccess(args: HasAccessArgs): Promise<HasAccessResponse> {
    try {
      const { id } = args;
      const res = await this._apiService.get<{ access: boolean }>(this._apiEndpoint + id + '/access');

      return res?.data;
    } catch (err) {
      console.error(err);
    }
  }

  public navigateToAdminGame(game: Game) {
    const { type, id } = game;
    this._router.navigate([ADMIN_ROUTES[type.toUpperCase()].fullPath.replace(':id', id)]);
  }

  public navigateToGame(game: Game) {
    this._router.navigate([CLIENT_ROUTES.GAME.fullPath.replace(':id', game.id)]);
  }
}

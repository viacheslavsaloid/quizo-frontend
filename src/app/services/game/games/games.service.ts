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
  GenerateTeammateTokenArgs,
  GenerateTeammateTokenResponse,
} from 'src/app/models/game';
import { GamesState } from 'src/app/store/states/games';
import { CLIENT_ROUTES } from 'src/app/routes/client/client.routes';

@Injectable()
export class GamesService extends CrudService<Game> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _gamesState: GamesState,
    protected _appPopupService: AppPopupService
  ) {
    super(_apiService, _appPopupService, _gamesState, _router, environment.gamesEndpoint, '', 'game');
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

  public async generatePlayerToken(args: GenerateTokenArgs): Promise<GenerateTokenResponse> {
    try {
      const { id } = args;
      const { data } = await this._apiService.post<{ token: string }>(this._apiEndpoint + id + '/generate-player', {});

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async generateTeammateToken(args: GenerateTeammateTokenArgs): Promise<GenerateTeammateTokenResponse> {
    try {
      const { id, userId } = args;
      const { data } = await this._apiService.post<{ token: string }>(this._apiEndpoint + id + '/generate-teammate', {
        userId,
      });

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

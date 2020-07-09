import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/auth';
import { ApiService } from '../api/api.service';
import { AuthState } from 'src/app/store/states/core';
import { AppConfigsService } from '../app-configs/app-configs.service';
import { Router } from '@angular/router';
import { decodeToken } from 'src/app/utils/jwt';
import { TokenModel } from 'src/app/models/utils';
import { CORE_ROUTES } from 'src/app/routes/core/core.routes';

@Injectable()
export class AuthService {
  private _url = environment.authEndpoint;
  private _configName = 'token';

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private _authState: AuthState,
    private _appConfigsService: AppConfigsService
  ) {
    const token = this._appConfigsService.get(this._configName);
    this.checkToken(token);
  }

  public get user$(): Observable<User> {
    return this._authState.state$;
  }

  public get user(): User {
    return this._authState.snapshot;
  }

  public async checkToken(token) {
    const verified = await this.me();
    if (token && verified) {
      const user = decodeToken(token);
      this._authState.login(user);
    }
  }

  public async me() {
    try {
      const res = await this._apiService.get<User>(this._url + 'me');
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  public async logout() {
    await this._apiService.post(this._url + 'logout', {});
    this._authState.logout();
    this._appConfigsService.set(this._configName, null);
    this._router.navigateByUrl(CORE_ROUTES.AUTH.fullPath);
  }

  public async login(args) {
    const { type, data } = args;
    const res = await this._apiService.post<{ token: string }>(this._url + `company/${type}`, data);

    const { token } = res.data;
    const user = decodeToken(token);

    this._authState.login(user);

    this._appConfigsService.set(this._configName, token);

    this._router.navigateByUrl(CORE_ROUTES.ADMIN.fullPath);
  }
}

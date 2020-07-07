import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/auth';
import { ApiService } from '../api/api.service';
import { AuthState } from 'src/app/store/states/core';
import { AppConfigsService } from '../app-configs/app-configs.service';
import { Router } from '@angular/router';

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

    if (token) {
      this._authState.login(token);
    }
  }

  public get user$(): Observable<User> {
    return this._authState.state$;
  }

  public get user(): User {
    return this._authState.snapshot;
  }

  public async logout() {
    await this._apiService.post(this._url + 'logout', {});
    this._authState.logout();
    this._appConfigsService.set(this._configName, null);
    this._router.navigateByUrl('auth');
  }

  public async login(args) {
    const { type, data } = args;
    const res = await this._apiService.post<User>(this._url + type, data);
    this._authState.login(res.data);
    this._appConfigsService.set(this._configName, res.data);
  }
}

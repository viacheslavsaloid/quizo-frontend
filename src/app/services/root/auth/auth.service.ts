import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/auth';
import { ApiService } from '../api/api.service';
import { AuthState } from 'src/app/store/states/root';

@Injectable()
export class AuthService {
  private _url = environment.authEndpoint;

  constructor(private _apiService: ApiService, private _authState: AuthState) {
    const user = localStorage.getItem('user');

    if (user) {
      this._authState.login(JSON.parse(user));
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
  }

  public async login(args) {
    const res = await this._apiService.post<User>(this._url + 'login', args);
    this._authState.login(res.data);
  }
}

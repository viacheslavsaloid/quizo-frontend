import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { User } from 'app/models/auth';
import { ApiService } from '../api/api.service';
import { AuthState } from 'app/store/states/root';

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
    try {
      await this._apiService.post(this._url + 'logout', {});
      this._authState.logout();
    } catch (err) {}
  }

  public async forgotPassword(args) {
    try {
      const res = await this._apiService.post<User>(this._url + 'forgot_password', args);
      this._authState.login(res.data);
    } catch (err) {}
  }

  public async signIn(args) {
    try {
      const res = await this._apiService.post<User>(this._url + 'sign_in', args);
      this._authState.login(res.data);
    } catch (err) {}
  }

  public async signUp(args) {
    try {
    } catch (err) {
      const res = await this._apiService.post<User>(this._url + 'sign_up', args);
      this._authState.login(res.data);
    }
  }
}

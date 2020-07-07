import { Injectable } from '@angular/core';
import { ConfigsState } from 'src/app/store/states/core';

@Injectable()
export class AppConfigsService {
  private _localStorageItem = 'configs';

  constructor(private _configsState: ConfigsState) {
    const configsFromStorage = JSON.parse(localStorage.getItem(this._localStorageItem)) || {};
    this._configsState.setState(configsFromStorage);
  }

  public set(key, value) {
    const state = this._configsState.set(key, value);
    localStorage.setItem(this._localStorageItem, JSON.stringify(state));
  }

  public get(key) {
    return this._configsState.get(key);
  }
}

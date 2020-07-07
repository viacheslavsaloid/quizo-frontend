import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Injectable } from '@angular/core';
import { AppConfigs } from 'src/app/models/store';

@StateRepository()
@State<AppConfigs>({
  name: 'configs',
  defaults: {
    language: 'en',
    sidenav: false,
    token: '',
  },
})
@Injectable()
export class ConfigsState extends NgxsDataRepository<AppConfigs> {
  @DataAction() set(key: string, value) {
    this.ctx.setState((state) => ({ ...state, [key]: value }));
    return this.getState();
  }

  @DataAction() get(key) {
    return this.getState()[key];
  }
}

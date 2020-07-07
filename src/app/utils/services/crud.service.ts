import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  GetManyArgs$,
  GetManyResponse$,
  GetOneArgs$,
  GetOneResponse$,
  GetManyArgs,
  GetManyResponse,
  GetOneArgs,
  GetOneResponse,
  AddManyToStoreFromApiArgs,
  AddManyToStoreFromApiResponse,
  AddOneToStoreFromApiArgs,
  AddOneToStoreFromApiResponse,
  GetOneFromApiArgs,
  GetOneFromApiResponse,
  GetManyFromApiArgs,
  GetManyFromApiResponse,
  SetToStoreArgs,
  SetToStoreResponse,
  AddOneArgs,
  RemoveOneArgs,
  RemoveOneResponse,
  AddOneResponse,
  UpdateOneArgs,
  UpdateOneResponse,
  CompareStoreAndApiArgs,
} from 'src/app/models/utils/crud.model';

import { filterData, getCrudFilter, getFilter } from 'src/app/utils/filters';
import { ApiService, AppPopupService } from 'src/app/services/core';
import { AppState } from '../classes/state.class';
import { Router } from '@angular/router';
import {
  OpenModalFormArgs,
  OpenModalResponse,
  OpenModalAndAddOneResponse,
  PopupAction,
  PopupType,
} from 'src/app/models/components/popup';

@Injectable()
export abstract class CrudService<T> {
  protected constructor(
    protected _apiService: ApiService,
    protected _appPopupService: AppPopupService,
    protected _state: AppState<T>,
    protected _router: Router,
    @Inject(String) protected _apiEndpoint: string,
    @Inject(String) protected _url: string,
    @Inject(String) protected _form: string
  ) {}

  public moveToItem(id) {
    this._router.navigateByUrl(`${this._url}/${id}`);
  }

  public getMany$(args: GetManyArgs$ = {}): GetManyResponse$<T> {
    const { filter = {} } = args;

    this.compareStoreAndApi(args);

    return this._state.values$.pipe(map((data) => filterData({ data, filter })));
  }

  public getOne$(args: GetOneArgs$): GetOneResponse$<T> {
    const { id } = args;

    this.getOne(args);

    return this._state.values$.pipe(map((values) => values.find((game: any) => game.id === id)));
  }

  public async compareStoreAndApi(args?: CompareStoreAndApiArgs): Promise<void> {
    const { filter = {} } = args;

    const { length: lengthFromStore } = filterData({ data: this._state.values, filter });
    const { data: lengthFromApi } = await this.getCount(filter);

    const fromStore = lengthFromStore && lengthFromStore === lengthFromApi;

    if (!fromStore) {
      this.addManyToStoreFromApi(args);
    }
  }

  public async getMany(args: GetManyArgs = {}): GetManyResponse<T> {
    const { filter } = args;
    const { values: data } = this._state;

    await this.compareStoreAndApi(args);

    return filterData({ data, filter });
  }

  public async getOne(args: GetOneArgs): GetOneResponse<T> {
    const { id } = args;

    return Object.assign({}, this._state.selectOne(id) || (await this.addOneToStoreFromApi(args)));
  }

  public async addManyToStoreFromApi(args: AddManyToStoreFromApiArgs = {}): AddManyToStoreFromApiResponse<any> {
    const res = await this.getManyFromApi(args);
    return this.addToStore(res);
  }

  public async addOneToStoreFromApi(args: AddOneToStoreFromApiArgs): AddOneToStoreFromApiResponse<T> {
    const { data } = await this.getOneFromApi(args);
    this.addToStore({ data: [data] });
    return data;
  }

  public async getOneFromApi(args?: GetOneFromApiArgs): GetOneFromApiResponse<T> {
    try {
      const { id } = args;
      return this._apiService.get<T>(this._apiEndpoint + id);
    } catch (err) {
      console.error(err);
    }
  }

  public async getManyFromApi(args?: GetManyFromApiArgs): GetManyFromApiResponse<T> {
    try {
      const { filter } = args;
      const res = await this._apiService.get<T[]>(this._apiEndpoint + getCrudFilter(filter));
      this._state.setTotal(res.total);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  public addToStore(args: SetToStoreArgs<T>): SetToStoreResponse<any> {
    const { data } = args;

    this._state.addMany(data);

    return this._state;
  }

  public async addOne(args: AddOneArgs<T>): AddOneResponse<T> {
    try {
      const { value } = args;

      const { data } = await this._apiService.post<T>(this._apiEndpoint, value);

      this._state.addOne(data);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async removeOne(args: RemoveOneArgs): RemoveOneResponse {
    const { id } = args;

    await this._apiService.delete(this._apiEndpoint + id);

    this._state.removeOne(id);

    this._router.navigateByUrl(this._url);
  }

  public async updateOne(args: UpdateOneArgs<T>): UpdateOneResponse<T> {
    try {
      const { id, changes } = args;

      const { data } = await this._apiService.patch<T>(this._apiEndpoint + id, changes);

      this._state.updateOne({ id, changes });

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async sort(data: T[]) {
    try {
      this._state.setMany(data.map((val, index) => ({ ...val, order: index + 1 })));
      const sorted = await this._apiService.post<T[]>(this._apiEndpoint + 'sort', { data });
      this._state.setMany(sorted.data);
    } catch (err) {
      console.error(err);
    }
  }

  public async openModal(args?: OpenModalFormArgs): OpenModalResponse<T> {
    const { type, model } = args || {};

    return this._appPopupService.openModalForm({
      translateTitle: this._form.toUpperCase(),
      fields: this._form,
      type,
      model,
    });
  }

  public async openModalAndAddOne(): OpenModalAndAddOneResponse<T> {
    const res = await this.openModal();

    if (res?.action === PopupAction.SUBMIT) {
      return this.addOne({ value: res.data });
    }
  }

  public async openModalAndUpdateOne(args: any): OpenModalAndAddOneResponse<T | void> {
    const { data, type } = args;

    console.log(data);

    const res = await this.openModal({ type: PopupType.EDIT, fields: type, model: data });

    const action = res ? res.action : PopupAction.CLOSE;

    switch (action) {
      case PopupAction.DELETE:
        return this.removeOne({ id: data.id });

      case PopupAction.SUBMIT:
        return this.updateOne({ id: data.id, changes: res.data });

      default:
        break;
    }
  }

  public getCount = (filter) =>
    this._state.total || this._apiService.get<number>(this._apiEndpoint + 'count' + getFilter(filter));
}

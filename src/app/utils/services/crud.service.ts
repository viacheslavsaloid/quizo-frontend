import { Injectable } from '@angular/core';
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
} from 'app/models/utils/crud';

import { filterData, getCrudFilter, getFilter } from 'app/utils/filters';
import { AppState } from 'app/models/store';
import { ApiService } from 'app/services/root';
import { ContactsFakeDb } from '../../../../db/contacts';

@Injectable()
export abstract class CrudService<T> {
  protected constructor(protected _api: ApiService) {}

  abstract get url(): string;

  abstract get state(): AppState<T>;

  public resolve() {
    this.addToStore({ data: ContactsFakeDb.contacts as any[] });
  }

  public getMany$(args: GetManyArgs$ = {}): GetManyResponse$<T> {
    const { filter = {} } = args;

    // this.compareStoreAndApi(args);

    return this.state.values$.pipe(map((data) => filterData({ data, filter })));
  }

  public getOne$(args: GetOneArgs$): GetOneResponse$<T> {
    const { id } = args;

    this.getOne(args);

    return this.state.values$.pipe(map((values) => values.find((game: any) => game.id === id)));
  }

  public async compareStoreAndApi(args?: CompareStoreAndApiArgs): Promise<void> {
    const { filter = {} } = args;

    const { length: lengthFromStore } = filterData({ data: this.state.values, filter });
    const { data: lengthFromApi } = await this.getCount(filter);

    const fromStore = lengthFromStore && lengthFromStore === lengthFromApi;

    if (!fromStore) {
      this.addManyToStoreFromApi(args);
    }
  }

  public async getMany(args: GetManyArgs = {}): GetManyResponse<T> {
    const { filter } = args;
    const { values: data } = this.state;

    await this.compareStoreAndApi(args);

    return filterData({ data, filter });
  }

  public async getOne(args: GetOneArgs): GetOneResponse<T> {
    const { id } = args;

    return Object.assign({}, this.state.selectOne(id) || (await this.addOneToStoreFromApi(args)));
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
      return this._api.get<T>(this.url + id);
    } catch (err) {
      console.error(err);
    }
  }

  public async getManyFromApi(args?: GetManyFromApiArgs): GetManyFromApiResponse<T> {
    try {
      const { filter } = args;
      return this._api.get<T[]>(this.url + getCrudFilter(filter));
    } catch (err) {
      console.error(err);
    }
  }

  public addToStore(args: SetToStoreArgs<T>): SetToStoreResponse<any> {
    const { data } = args;

    this.state.addMany(data);

    return this.state;
  }

  public async addOne(args: AddOneArgs<T>): AddOneResponse<T> {
    try {
      const { value } = args;

      const { data } = await this._api.post<T>(this.url, value);

      this.state.addOne(data);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async removeOne(args: RemoveOneArgs): RemoveOneResponse {
    const { id } = args;

    await this._api.delete(this.url + id);

    this.state.removeOne(id);
  }

  public async updateOne(args: UpdateOneArgs<T>): UpdateOneResponse<T> {
    try {
      const { id, changes } = args;

      const { data } = await this._api.patch<T>(this.url + id, changes);

      this.state.updateOne({ id, changes });

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async sort(data: T[]) {
    try {
      this.state.setMany(data.map((val, index) => ({ ...val, order: index + 1 })));
      const sorted = await this._api.post<T[]>(this.url + 'sort', { data });
      this.state.setMany(sorted.data);
    } catch (err) {
      console.error(err);
    }
  }

  public getCount = (filter) => this._api.get<number>(this.url + 'count' + getFilter(filter));
}

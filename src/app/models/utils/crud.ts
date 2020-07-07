import { Observable } from 'rxjs';
import { IdModel, ChangesModel, DataModel, FilterModel } from './data';

export interface RemoveOneArgs extends IdModel {}
export interface UpdateOneArgs<T> extends IdModel, ChangesModel<T> {}
export interface UpdateManyArgs<T> extends IdModel, ChangesModel<T[]> {}

export interface GetManyFromApiArgs extends FilterModel {}
export interface SetToStoreArgs<T> extends DataModel<T[]> {}

export interface GetManyArgs extends FilterModel {}
export interface GetManyArgs$ extends FilterModel {}
export interface GetOneArgs$ extends IdModel {}
export interface GetOneFromApiArgs extends IdModel {}
export interface GetOneArgs extends IdModel {}
export interface AddManyToStoreFromApiArgs extends FilterModel {}
export interface AddOneToStoreFromApiArgs extends IdModel {}

export interface AddOneArgs<T> {
  value: T;
}

export type AddOneResponse<T> = Promise<T>;
export type UpdateOneResponse<T> = Promise<T>;
export type RemoveOneResponse = Promise<void>;

export type AddManyToStoreFromApiResponse<T> = Promise<T>;
export type AddOneToStoreFromApiResponse<T> = Promise<T>;

export type GetManyFromApiResponse<T> = Promise<DataModel<T[]>>;
export type GetOneFromApiResponse<T> = Promise<DataModel<T>>;

export type GetManyResponse<T> = Promise<T[]>;
export type GetOneResponse<T> = Promise<T>;

export type GetManyResponse$<T> = Observable<T[]>;
export type GetOneResponse$<T> = Observable<T>;

export type SetToStoreResponse<T> = T;

export interface CompareStoreAndApiArgs extends FilterModel {}

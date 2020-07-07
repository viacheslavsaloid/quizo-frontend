export interface DataModel<T> {
  data: T;
}

export interface IdModel {
  id: string;
}

export interface ChangesModel<T> {
  changes: T;
}

export interface FilterModel {
  filter?: object;
}

export interface TokenModel {
  token: string;
}

export interface AccessModel {
  access: boolean;
}

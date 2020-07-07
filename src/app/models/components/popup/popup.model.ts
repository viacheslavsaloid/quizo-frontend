export enum PopupType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export enum PopupAction {
  CLOSE = 'CLOSE',
  DELETE = 'DELETE',
  SUBMIT = 'SUBMIT',
}

export interface PopupResponse<T> {
  action: PopupAction;
  data?: T;
}

export interface PopupOpenArgs {
  component: any;
  panelClass?: string;
  type?: PopupType;
  title?: string;
  fields?: string[];
  model?: object;
  media?: string;
}

export interface OpenPopupFormArgs {
  type?: PopupType;
  title?: string;
  translateTitle?: string;
  fields?: any;
  model?: any;
  panelClass?: string;
  addToValue?: {};
}

export type OpenPopupResponse<T> = Promise<PopupResponse<T>>;
export type OpenPopupAndAddOneResponse<T> = Promise<T>;

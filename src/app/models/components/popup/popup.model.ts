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
  type?: PopupType;
  title?: string;
  fields?: string[];
  model?: object;
  media?: string;
}

export interface OpenModalFormArgs {
  type?: PopupType;
  title?: string;
  translateTitle?: string;
  fields: string;
  model?: any;
}

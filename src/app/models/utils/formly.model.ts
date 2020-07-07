export interface AppFormlyField {
  key?: string;
  hide?: boolean;
  hideTemplate?: boolean;
  defaultValue?: any;
  wrappers?: string[];
  type?: string;
  group?: [AppFormlyField];
  array?: AppFormlyField;
  label?: string;
  placeholder?: string;
  translate?: boolean;
  required?: boolean;
  readonly?: boolean;
  rows?: number;
  theme?: string;
  limit?: number;
  hideExpression?: () => boolean;
  actions?: [
    {
      title: string;
    }
  ];
  showAddButton?: boolean;
  showDeleteButton?: boolean;
  showSubmitButton?: boolean;
  showIndex?: boolean;
}

interface KeyValue<T> {
  [id: string]: T;
}

export type GenerateFormlyFieldProps = KeyValue<any> | Array<string | AppFormlyField>;

export interface GenerateFormlyFieldsArgs {
  fields: any;
  type?: string;
}

import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AppFormlyField, GenerateFormlyFieldsArgs } from 'src/app/models/utils';
import { isField, isEmptyString, getLabelByKey } from 'src/app/utils/formly';

@Injectable()
export class AppFormlyService {
  private forms = {};
  private types = {
    users: 'repeat',
    email: 'email',
    date: 'datepicker',
    description: 'textarea',
    comment: 'textarea',
    image: 'file',
    icon: 'file',
    logo: 'file',
    preview: 'file',
    background: 'file',
    media: 'file',
    password: 'password',
  };

  constructor() {}

  public getForm = (key) => this.forms[key];

  public setForm(key, data) {
    this.forms[key] = data;
  }
  public setForms(forms) {
    for (const form in forms) {
      if (forms.hasOwnProperty(form)) {
        const data = forms[form];
        this.setForm(form, data);
      }
    }
  }

  public generateFormlyField(field: AppFormlyField): FormlyFieldConfig {
    const defaultType = field.group
      ? ''
      : field.hideTemplate
      ? 'hide'
      : isField(field.array)
      ? 'repeat'
      : this.types[field.key] || 'input';

    const defaultLabel = field.key && `FORM.${getLabelByKey(field.key)}`;
    const defaultPlaceholder = field.key && `FORM.${getLabelByKey(field.key)}_PLACEHOLDER`;
    const defaultWrappers = field.group ? ['group'] : null;

    const {
      key,
      wrappers = defaultWrappers,
      hide,
      hideTemplate,
      defaultValue = isField(field.array) ? [] : '',
      type = defaultType,
      label = defaultLabel,
      placeholder = defaultPlaceholder,
      translate = !isEmptyString(field.key),
      required = false,
      readonly = false,
      array,
      group,
      actions,
      rows = 3,
      theme,
      hideExpression,
      showAddButton = true,
      showDeleteButton = true,
      showSubmitButton = false,
      showIndex = true,
      limit = Infinity,
    } = field;

    let fieldArray;

    if (isField(array)) {
      fieldArray = isField(array.group)
        ? {
            fieldGroup: array.group.map((groupField) => this.generateFormlyField(groupField)),
          }
        : this.generateFormlyField(typeof array === 'string' ? { key: array } : array);
    }

    const fieldGroup = group && this.generateFormlyFields({ fields: group });

    const formlyField: FormlyFieldConfig = {
      key,
      wrappers,
      type,
      hide,
      defaultValue,
      fieldArray,
      fieldGroup,
      hideExpression,
      templateOptions: {
        limit,
        label,
        placeholder,
        translate,
        required,
        readonly,
        actions,
        hideTemplate,
        rows,
        theme,
        showAddButton,
        showDeleteButton,
        showSubmitButton,
        showIndex,
      },
    };

    return formlyField;
  }

  public generateFormlyFields(args: GenerateFormlyFieldsArgs): Array<FormlyFieldConfig> {
    const { type } = args;

    const formlyFields: FormlyFieldConfig[] = [];

    const fields = typeof args.fields === 'string' ? this.getForm(args.fields) : args.fields;

    if (!fields) {
      return [];
    }

    if (Array.isArray(fields)) {
      fields.forEach((key: AppFormlyField) => {
        const inputType = type || key.type;
        const params = typeof key === 'string' ? { key, type: inputType } : { ...key, type: inputType };
        formlyFields.push(this.generateFormlyField(params));
      });
    } else {
      Object.keys(fields).forEach((key) => {
        const inputType = type || fields[key].type;
        const params =
          typeof fields[key] === 'string' ? { key, type: inputType } : { key, type: inputType, ...fields[key] };

        formlyFields.push(this.generateFormlyField(params));
      });
    }

    return formlyFields;
  }
}

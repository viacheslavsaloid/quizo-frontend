import { FormlyFieldConfig } from '@ngx-formly/core';
import { APP_FORMLY_FIELD_TYPES } from './types';
import { isField, isEmptyString, getLabelByKey } from './utils';
import { AppFormlyField, GenerateFormlyFieldsArgs } from 'src/app/models/utils/formly.model';

export function generateFormlyField(field: AppFormlyField): FormlyFieldConfig {
  const defaultType = field.group
    ? ''
    : field.hideTemplate
    ? 'hide'
    : isField(field.array)
    ? 'repeat'
    : APP_FORMLY_FIELD_TYPES[field.key] || 'input';

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
          fieldGroup: array.group.map((groupField) => generateFormlyField(groupField)),
        }
      : generateFormlyField(typeof array === 'string' ? { key: array } : array);
  }

  const fieldGroup = group && generateFormlyFields({ fields: group });

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

export function generateFormlyFields(args: GenerateFormlyFieldsArgs): Array<FormlyFieldConfig> {
  const { fields, type } = args;

  const formlyFields: FormlyFieldConfig[] = [];

  if (!fields) {
    return [];
  }

  if (Array.isArray(fields)) {
    fields.forEach((key: AppFormlyField) => {
      const inputType = type || key.type;
      if (typeof key === 'string') {
        formlyFields.push(generateFormlyField({ key, type: inputType }));
      } else {
        formlyFields.push(generateFormlyField({ ...key, type: inputType }));
      }
    });
  } else {
    Object.keys(fields).forEach((key) => {
      const inputType = type || fields[key].type;

      if (typeof fields[key] === 'string') {
        formlyFields.push(generateFormlyField({ key, type: inputType }));
      } else {
        formlyFields.push(generateFormlyField({ key, type: inputType, ...fields[key] }));
      }
    });
  }

  return formlyFields;
}

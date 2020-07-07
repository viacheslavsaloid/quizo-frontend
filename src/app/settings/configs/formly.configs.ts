import { validateEmail } from 'src/app/utils/validators';

import {
  FormlyRepeatComponent,
  FormlyFileUploadComponent,
  FormlyAutocompleteComponent,
  FormlyTimePickerComponent,
  FormlyDatePickerComponent,
  FormlyHideComponent,
  FormlyGroupWrapperComponent,
} from 'src/app/components/shared/formly';

import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldCheckbox } from '@ngx-formly/material/checkbox';

export const FORMLY_CONFIGS: ConfigOption = {
  wrappers: [{ name: 'group', component: FormlyGroupWrapperComponent }],
  types: [
    {
      name: 'app-checkbox',
      component: FormlyFieldCheckbox,
    },
    {
      name: 'email',
      extends: 'input',
      defaultOptions: {
        validators: {
          email: validateEmail,
        },
      },
    },
    {
      name: 'password',
      extends: 'input',
      defaultOptions: {
        templateOptions: {
          type: 'password',
        },
      },
    },
    {
      name: 'repeat',
      component: FormlyRepeatComponent,
    },
    {
      name: 'file',
      component: FormlyFileUploadComponent,
    },
    {
      name: 'hide',
      component: FormlyHideComponent,
    },
    {
      name: 'autocomplete',
      component: FormlyAutocompleteComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'time',
      component: FormlyTimePickerComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'date',
      component: FormlyDatePickerComponent,
      wrappers: ['form-field'],
    },
  ],
};

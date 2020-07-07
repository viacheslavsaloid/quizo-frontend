import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

export const materialProvider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: appearance,
};

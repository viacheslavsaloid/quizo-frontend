import { FormControl } from '@angular/forms';

export const validateAutocomplete = (options) => (control: FormControl) =>
  options.find((option) => option === control.value) ? true : false;

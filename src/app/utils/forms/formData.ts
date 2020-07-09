import { FileInput } from 'ngx-material-file-input';

export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const i of Object.keys(formValue)) {
    let value;

    if (formValue[i] instanceof FileInput) {
      for (const j in formValue[i].files) {
        if (formValue[i].files.hasOwnProperty(j)) {
          const element = formValue[i].files[j];
          formData.append(i, element);
        }
      }
    } else if (formValue[i] instanceof Date) {
      value = formValue[i];
    } else if (typeof formValue[i] === 'object') {
      value = JSON.stringify(formValue[i]);
    } else {
      value = formValue[i];
    }

    if (value) {
      formData.append(i, value);
    }
  }

  return formData;
}

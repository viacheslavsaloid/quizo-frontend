import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

/*
 * расширение для FORMLY + NGX TRANSLATE
 */

export class FormlyTranslateExtension {
  constructor(private translate: TranslateService) {}
  prePopulate(field: FormlyFieldConfig) {
    const { templateOptions = {} } = field;

    if (!templateOptions.translate || templateOptions._translated) {
      return;
    }

    templateOptions._translated = true;

    field.expressionProperties = {
      ...(field.expressionProperties || {}),
      'templateOptions.label': this.translate.stream(templateOptions.label),
      'templateOptions.placeholder': this.translate.stream(templateOptions.placeholder),
    };
  }
}

export function registerFormlyTranslateExtension(translate: TranslateService) {
  return {
    extensions: [
      {
        name: 'translate',
        extension: new FormlyTranslateExtension(translate),
      },
    ],
  };
}

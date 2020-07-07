import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

/*
 * расширение для FORMLY + NGX TRANSLATE
 */

export class FormlyTranslateExtension {
  constructor(private translate: TranslateService) {}
  prePopulate(field: FormlyFieldConfig) {
    const options = field.templateOptions || {};
    if (!options.translate || options._translated) {
      return;
    }

    options._translated = true;
    field.expressionProperties = {
      ...(field.expressionProperties || {}),
      'templateOptions.label': this.translate.stream(options.label),
      'templateOptions.placeholder': this.translate.stream(options.placeholder),
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

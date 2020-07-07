import { FORMLY_CONFIG } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { registerFormlyTranslateExtension } from '../extensions';

export const formlyProvider = {
  provide: FORMLY_CONFIG,
  multi: true,
  useFactory: registerFormlyTranslateExtension,
  deps: [TranslateService],
};

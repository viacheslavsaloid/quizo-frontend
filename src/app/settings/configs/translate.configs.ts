import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*
 * глобальные конфиги для NGX-TRANSLATE
 * переводы, по дефолту, тянутся из assets/i18n/[language].json
 * устанавливается дефолтный язык
 */

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export const TRANSLATE_CONFIGS = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'ru',
};

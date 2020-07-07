import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

/*
 * глобальные конфиги для NGX-TRANSLATE
 * переводы, по дефолту, тянутся из assets/i18n/[language].json
 * устанавливается дефолтный язык
 */

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoader(httpClient, [
    { prefix: './assets/i18n/core/', suffix: '.json' },
    { prefix: './assets/i18n/auth/', suffix: '.json' },
    { prefix: './assets/i18n/admin/', suffix: '.json' },
  ]);
}

export const TRANSLATE_CONFIGS = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

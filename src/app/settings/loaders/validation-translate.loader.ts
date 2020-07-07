import { Injectable } from '@angular/core';
import { FormlyConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

/*
 * Сервис для инициализации глобальных ошибок FORMLY с NGX-TRANSLATE
 * Метод init вызыватся в -> root.component.ts
 */

@Injectable()
export class FormlyValidationLoader {
  constructor(private translateService: TranslateService, private formlyConfig: FormlyConfig) {}

  init(): void {
    this.formlyConfig.addValidatorMessage('required', () => this.translateService.instant('VALIDATORS.REQUIRED'));
    this.formlyConfig.addValidatorMessage('email', () => this.translateService.instant('VALIDATORS.EMAIL'));
    this.formlyConfig.addValidatorMessage('autocomplete', () =>
      this.translateService.instant('VALIDATORS.AUTOCOMPLETE')
    );
  }
}

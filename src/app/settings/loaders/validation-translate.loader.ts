import { Injectable } from '@angular/core';
import { FormlyConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
/*
 * Сервис для инициализации глобальных ошибок FORMLY с NGX-TRANSLATE
 * Метод init вызыватся в -> root.component.ts
 */

@Injectable()
export class FormlyValidationLoader {
  constructor(private _translateService: TranslateService, private _formlyConfig: FormlyConfig) {}

  init(): void {
    this._formlyConfig.addValidatorMessage('required', () => this._translateService.instant('VALIDATORS.REQUIRED'));
    this._formlyConfig.addValidatorMessage('email', () => this._translateService.instant('VALIDATORS.EMAIL'));
  }
}

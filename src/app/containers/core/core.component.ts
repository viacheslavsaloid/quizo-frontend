import { Component } from '@angular/core';
import { FormlyValidationLoader } from 'src/app/settings/loaders';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigsService, AppFormlyService } from 'src/app/services/core';
import { APP_FORMS } from 'src/assets/forms';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  constructor(
    private _formlyValidation: FormlyValidationLoader,
    private _translateService: TranslateService,
    private _appConfigsService: AppConfigsService,
    private _appFormlyService: AppFormlyService
  ) {
    this._appFormlyService.setForms(APP_FORMS);
    this._formlyValidation.init();
    this.setDefaultLanguage();
  }

  private setDefaultLanguage() {
    this._translateService.addLangs(['en', 'ru']);

    const languages = this._translateService.getLangs();

    const cachedLanguage = this._appConfigsService.get('language');
    const browserLanguage = this._translateService.getBrowserLang();

    this._translateService.use(cachedLanguage || browserLanguage || languages[0]);
  }
}

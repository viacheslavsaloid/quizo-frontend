import { Component, OnInit, Inject } from '@angular/core';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FormlyValidationLoader } from 'app/settings/loaders';
import { NgOnDestory$ } from 'app/utils/hooks';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { FuseConfigService } from '@fuse/services/config.service';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as en } from 'assets/i18n/en';
import { locale as ru } from 'assets/i18n/ru';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  fuseConfig: any;
  navigation: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _ngOnDestory$: NgOnDestory$,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _formlyValidation: FormlyValidationLoader,
    private _fuseConfigService: FuseConfigService,
    private _translateService: TranslateService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _platform: Platform
  ) {}

  ngOnInit() {
    this._translateService.addLangs(['en', 'ru']);

    this._translateService.setDefaultLang('en');

    this._fuseTranslationLoaderService.loadTranslations(en, ru);

    this._translateService.use('en');

    this._formlyValidation.init();

    this._fuseSplashScreenService.hide();

    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Subscribe to config changes
    this._fuseConfigService.config.pipe(takeUntil(this._ngOnDestory$)).subscribe((config) => {
      this.fuseConfig = config;

      // Boxed
      if (this.fuseConfig.layout.width === 'boxed') {
        this.document.body.classList.add('boxed');
      } else {
        this.document.body.classList.remove('boxed');
      }

      // Color theme - Use normal for loop for IE11 compatibility
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.document.body.classList.length; i++) {
        const className = this.document.body.classList[i];

        if (className.startsWith('theme-')) {
          this.document.body.classList.remove(className);
        }
      }

      this.document.body.classList.add(this.fuseConfig.colorTheme);
    });
  }
}

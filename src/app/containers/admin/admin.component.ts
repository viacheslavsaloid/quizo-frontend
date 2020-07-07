import { Component, OnInit } from '@angular/core';

import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { FuseConfigService } from '@fuse/services/config.service';
import { ADMIN_NAVIGATION } from 'app/routes/admin/admin.navigation';

import { locale as en } from 'app/routes/admin/i18n/en';
import { locale as ru } from 'app/routes/admin/i18n/ru';
import { NgOnDestory$ } from 'app/utils/hooks';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import * as _ from 'lodash';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public fuseConfig: any;
  public navigation = ADMIN_NAVIGATION;
  public languages = [
    {
      id: 'en',
      title: 'English',
      flag: 'us',
    },
    {
      id: 'ru',
      title: 'Russian',
      flag: 'tr',
    },
  ];

  public selectedLanguage: {};

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSidebarService: FuseSidebarService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _fuseConfigService: FuseConfigService,
    private _translateService: TranslateService
  ) {}

  public toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }

  public onToolbarLeftClick() {
    this.toggleSidebarOpen('navbar');
  }
  public onToolbarRightClick() {
    this.toggleSidebarOpen('quickPanel');
  }

  public onToolbarChatClick() {
    this.toggleSidebarOpen('chatPanel');
  }

  public onSettingsClick() {
    this.toggleSidebarOpen('themeOptionsPanel');
  }

  public onToolbarLanguageChange(lang) {
    this.selectedLanguage = lang;

    // Use the selected language for translations
    this._translateService.use(lang.id);
  }

  ngOnInit() {
    this._fuseConfigService.config.pipe(takeUntil(this._ngOnDestroy$)).subscribe((config) => {
      this.fuseConfig = config;
    });

    // Register the navigation to the service
    this._fuseNavigationService.register('admin', ADMIN_NAVIGATION);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('admin');

    // Set the navigation translations
    this._fuseTranslationLoaderService.loadTranslations(en, ru);

    // Set the selected language from default languages
    this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
  }
}

import { Component, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/services/root';
import { AUTH_ROUTES } from 'app/routes/auth/auth.routes';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as en } from './i18n/en';
import { locale as ru } from './i18n/ru';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: fuseAnimations,
})
export class SignUpComponent implements OnInit {
  public SIGN_IN_LINK: string;
  public fields: string;

  constructor(private _authService: AuthService, private _fuseTranslationLoaderService: FuseTranslationLoaderService) {}

  public onSubmit(data) {
    this._authService.signUp(data);
  }

  ngOnInit() {
    this._fuseTranslationLoaderService.loadTranslations(en, ru);

    this.SIGN_IN_LINK = AUTH_ROUTES.SIGN_IN.fullPath;
    this.fields = 'sign-up';
  }
}

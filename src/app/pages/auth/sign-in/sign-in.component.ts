import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/services/root';
import { AUTH_ROUTES } from 'app/routes/auth/auth.routes';
import { ROOT_ROUTES } from 'app/routes/root/root.routes';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as ru } from './i18n/ru';
import { locale as en } from './i18n/en';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: fuseAnimations,
})
export class SignInComponent implements OnInit {
  public SIGN_UP_LINK: string;
  public FORGOT_PASSWORD_LINK: string;
  public fields: string;

  constructor(
    private _authService: AuthService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _router: Router
  ) {}

  public async onSubmit(data) {
    await this._authService.signIn(data);
    this._router.navigate([ROOT_ROUTES.ADMIN.fullPath]);
  }

  ngOnInit() {
    this.SIGN_UP_LINK = AUTH_ROUTES.SIGN_UP.fullPath;
    this.FORGOT_PASSWORD_LINK = AUTH_ROUTES.FORGOT_PASSWORD.fullPath;
    this.fields = 'sign-in';

    this._fuseTranslationLoaderService.loadTranslations(en, ru);
  }
}

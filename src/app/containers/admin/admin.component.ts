import { Component, OnInit } from '@angular/core';
import { AuthService, AppConfigsService } from 'src/app/services/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/auth';
import { ADMIN_ROUTES } from 'src/app/routes/admin/admin.routes';
import { AppRoute } from 'src/app/models/utils';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestory$ } from 'src/app/hooks';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public navLinks: AppRoute[];
  public user$: Observable<User>;

  public languages: string[];
  public acitveLanguage: string;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _authService: AuthService,
    private _translateService: TranslateService,
    private _appConfigsService: AppConfigsService
  ) {}

  public onExit() {
    this._authService.logout();
  }

  public onLanguageChange(language: string) {
    this._translateService.use(language);
  }

  ngOnInit() {
    this.languages = this._translateService.getLangs();
    this.acitveLanguage = this._translateService.currentLang;

    const routes = Object.values(ADMIN_ROUTES);
    this.navLinks = routes.filter((link: any) => link.inNav);

    this.user$ = this._authService.user$;

    this._translateService.onLangChange.pipe(takeUntil(this._ngOnDestroy$)).subscribe(({ lang }) => {
      this.acitveLanguage = lang;
      this._appConfigsService.set('language', lang);
    });
  }
}

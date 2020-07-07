import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppNotificationService {
  constructor(private _toastrService: ToastrService, private _translateService: TranslateService) {}

  showSuccess(message, title?) {
    const translateMessage = this._translateService.instant(`SUCCESS.${message}`);
    const translateTitle = this._translateService.instant('SUCCESS.STATUS', { status: title });
    this._toastrService.success(translateMessage, translateTitle);
  }

  showError(message, title?) {
    const translateMessage = this._translateService.instant(`ERROR.${message}`);
    const translateTitle = this._translateService.instant('ERROR.STATUS', { status: title });
    this._toastrService.error(translateMessage, translateTitle);
  }
}

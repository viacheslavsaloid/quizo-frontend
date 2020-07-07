import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class NotificationsService {
  constructor(private toastr: ToastrService, private translate: TranslateService) {}

  showSuccess(args) {
    this.toastr.success(args);
  }

  showError(args) {
    this.toastr.error(args);
  }
}

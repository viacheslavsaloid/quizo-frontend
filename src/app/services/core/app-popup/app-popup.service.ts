import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenModalFormArgs, PopupType, PopupOpenArgs } from 'src/app/models/components/popup';
import { PopupFormComponent } from 'src/app/components/shared';

@Injectable()
export class AppPopupService {
  constructor(private _matDialog: MatDialog) {}

  public openModalForm(args: OpenModalFormArgs) {
    const { type = PopupType.CREATE, title, model = {}, translateTitle, fields, panelClass } = args;

    const modalTitle = title || `MODAL.${translateTitle}`;

    return this.open({
      component: PopupFormComponent,
      panelClass,
      type,
      title: modalTitle,
      model,
      fields,
    });
  }

  public open(args: PopupOpenArgs) {
    const { component, panelClass, ...data } = args;

    return this._matDialog
      .open(component, {
        panelClass,
        data,
      })
      .afterClosed()
      .toPromise();
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenModalFormArgs, PopupType, PopupOpenArgs } from 'app/models/components/popup';
import { FusePopupFormComponent } from 'app/components/shared';

@Injectable()
export class PopupService {
  constructor(private _matDialog: MatDialog) {}

  public openModalForm(args: OpenModalFormArgs) {
    const { type = PopupType.CREATE, title, model = {}, translateTitle, fields, panelClass } = args;

    const modalTitle = title || `MODAL.${translateTitle}`;

    return this.open({
      component: FusePopupFormComponent,
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

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getFormlyModel } from 'src/app/utils/formly';
import { OpenModalFormArgs, PopupType, PopupOpenArgs } from 'src/app/models/components/popup';
import { PopupFormComponent } from 'src/app/components/shared';

@Injectable()
export class PopupService {
  constructor(private _dialog: MatDialog) {}

  public openModalForm(args: OpenModalFormArgs) {
    const { type = PopupType.CREATE, title, model = {}, translateTitle, fields } = args;

    const modalTitle = title || `MODAL.${translateTitle}`;

    return this.open({
      component: PopupFormComponent,
      type,
      title: modalTitle,
      model,
      fields: typeof fields === 'object' ? fields : getFormlyModel(fields),
    });
  }

  public open(args: PopupOpenArgs) {
    const { component, ...data } = args;

    return this._dialog
      .open(component, {
        data,
      })
      .afterClosed()
      .toPromise();
  }
}

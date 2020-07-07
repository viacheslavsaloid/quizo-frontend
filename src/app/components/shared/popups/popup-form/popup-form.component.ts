import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupType, PopupAction, PopupResponse } from 'src/app/models/components/popup';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupFormComponent {
  constructor(private _dialogRef: MatDialogRef<PopupFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public get title() {
    return this.data ? this.data.title : '';
  }

  public get type() {
    return this.data ? this.data.type : '';
  }

  public get model() {
    return this.data ? this.data.model : {};
  }

  public get fields() {
    return this.data ? this.data.fields : [];
  }

  public onSubmit(data) {
    this.closePopup({
      action: PopupAction.SUBMIT,
      data,
    });
  }

  public onDelete() {
    this.closePopup({
      action: PopupAction.DELETE,
    });
  }

  public closePopup = (res: PopupResponse<any>) => this._dialogRef.close(res);

  public showDelete = () => this.type === PopupType.EDIT;
}

import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupResponse, PopupType, PopupAction } from 'app/models/components/popup';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fuse-popup-form',
  templateUrl: './fuse-popup-form.component.html',
  styleUrls: ['./fuse-popup-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FusePopupFormComponent implements OnInit {
  public popupForm: FormGroup;

  constructor(
    private _matDialogRef: MatDialogRef<FusePopupFormComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  public get title() {
    return this._data ? this._data.title : '';
  }

  public get type() {
    return this._data && this._data.type ? this._data.type : PopupType.CREATE;
  }

  public get model() {
    return this._data ? this._data.model : {};
  }

  public get fields() {
    return this._data ? this._data.fields : [];
  }

  public get img() {
    return this._data && this._data.img ? this._data.img : 'assets/images/avatars/profile.jpg';
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

  public onClose() {
    this.closePopup({
      action: PopupAction.CLOSE,
    });
  }

  public closePopup = (res: PopupResponse<any>) => this._matDialogRef.close(res);

  public showDelete = () => this.type === PopupType.EDIT;
  public showEdit = () => this.type === PopupType.EDIT;
  public showCreate = () => this.type === PopupType.CREATE;

  ngOnInit() {
    this.popupForm = new FormGroup({});
  }
}

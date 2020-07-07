import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupResponse } from 'src/app/models/components/popup';

@Component({
  selector: 'app-popup-media',
  templateUrl: './popup-media.component.html',
  styleUrls: ['./popup-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupMediaComponent {
  constructor(private _dialogRef: MatDialogRef<PopupMediaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public get media() {
    return this.data ? this.data.media : '';
  }

  public isPhoto = () => this.media.match(/\.(jpg|jpeg|png)$/);
  public isVideo = () => this.media.match(/\.(mp4)$/);
  public isAudio = () => this.media.match(/\.(mp3)$/);

  public closePopup = (res: PopupResponse<any>) => this._dialogRef.close(res);
}

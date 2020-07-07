import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-formly-file-upload',
  templateUrl: './formly-file-upload.component.html',
  styleUrls: ['./formly-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFileUploadComponent extends FieldType {}

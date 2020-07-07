import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-date-picker',
  templateUrl: './formly-date-picker.component.html',
  styleUrls: ['./formly-date-picker.component.scss'],
})
export class FormlyDatePickerComponent extends FieldType {}

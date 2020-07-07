import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { generateFormlyFields } from 'app/utils/formly';

@Component({
  selector: 'app-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormComponent {
  @Output() private submited = new EventEmitter();
  @Output() private deleted = new EventEmitter();

  @Input() public form = new FormGroup({});

  @Input() public className = '';

  @Input() public model = {};
  @Input() public title = '';
  @Input() public type: string;

  @Input() public options: FormlyFormOptions = {};

  @Input() public showSubmit = true;
  @Input() public showDelete = true;

  @Input() public submitContent = 'FORM.SUBMIT';
  @Input() public submitColor = 'accent';
  @Input() public submitType = 'submit';
  @Input() public submitClassName = 'submit';

  @Input() public deleteContent = 'FORM.DELETE';
  @Input() public deleteColor = 'warn';
  @Input() public deleteType;
  @Input() public deleteClassName;

  public _fields;
  @Input('fields')
  set fields(fields: object) {
    this._fields = generateFormlyFields({ fields, type: this.type });
  }
  get fields() {
    return this._fields;
  }

  constructor() {}

  public onSubmit = () => this.submited.emit(this.form.value);
  public onDelete = () => this.deleted.emit(this.form.value);

  public get showSubmitButton() {
    return this.showSubmit && this.submited.observers.length;
  }
  public get showDeleteButton() {
    return this.showDelete && this.deleted.observers.length;
  }
}

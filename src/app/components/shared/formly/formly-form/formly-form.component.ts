import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { generateFormlyFields } from 'src/app/utils/formly';

@Component({
  selector: 'app-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormComponent {
  @Output() private _submited = new EventEmitter();
  @Output() private _deleted = new EventEmitter();

  @Input() public form = new FormGroup({});

  @Input() public showDelete = true;
  @Input() public showSubmit = true;

  @Input() public className = '';

  @Input() public model = {};
  @Input() public title = '';
  @Input() public type: string;

  @Input() public options: FormlyFormOptions = {};

  @Input() public submitText: string;

  public _fields;
  @Input('fields')
  set fields(fields: object) {
    this._fields = generateFormlyFields({ fields, type: this.type });
  }
  get fields() {
    return this._fields;
  }

  constructor() {}

  public onSubmit = () => this._submited.emit(this.form.value);
  public onDelete = () => this._deleted.emit(this.form.value);

  public get showSubmitButton() {
    return this.showSubmit && this._submited.observers.length;
  }
  public get showDeleteButton() {
    return this.showDelete && this._deleted.observers.length;
  }
}

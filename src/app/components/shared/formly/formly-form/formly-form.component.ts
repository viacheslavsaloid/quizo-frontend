import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { AppFormlyService } from 'src/app/services/core/app-formly/app-formly.service';

@Component({
  selector: 'app-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormComponent {
  @Output() public submited: EventEmitter<boolean> = new EventEmitter();
  @Output() public deleted: EventEmitter<boolean> = new EventEmitter();

  @Input() public form: FormGroup = new FormGroup({});

  @Input() public showDelete: boolean = true;
  @Input() public showSubmit: boolean = true;

  @Input() public className: string = '';

  @Input() public translateTitle: string;
  @Input() public model: object = {};
  @Input() public type: string;
  @Input() public options: FormlyFormOptions = {};

  @Input() public submitText: string = 'FORM.SUBMIT';
  @Input() public submitColor: string = 'primary';

  @Input() public deleteText: string = 'FORM.DELETE';
  @Input() public deleteColor: string = 'warn';

  public _fields;
  @Input('fields')
  public set fields(fields: object) {
    this._fields = this._appFormlyService.generateFormlyFields({ fields, type: this.type });
  }
  public get fields() {
    return this._fields;
  }

  constructor(private _appFormlyService: AppFormlyService) {}

  public onSubmit = () => this.submited.emit(this.form.value);
  public onDelete = () => this.deleted.emit(this.form.value);

  public showSubmitButton = () => this.showSubmit && this.submited.observers.length;
  public showDeleteButton = () => this.showDelete && this.deleted.observers.length;
}

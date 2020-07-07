import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-repeat',
  templateUrl: './formly-repeat.component.html',
  styleUrls: ['./formly-repeat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyRepeatComponent extends FieldArrayType {
  public trackByFn(index, item) {
    return index; // or item.id
  }
}

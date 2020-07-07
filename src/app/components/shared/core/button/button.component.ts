import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export type ColorType = 'primary' | 'accent' | 'warn';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter();

  @Input() type = 'button';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() color: ColorType;
  @Input() icon: string;
  @Input() text: string;
  @Input() className: string;

  constructor() {}

  public onClick(event) {
    this.clicked.emit(event);
  }
}

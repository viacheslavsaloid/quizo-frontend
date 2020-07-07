import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter();

  @Input() type = 'button';
  @Input() disabled = false;
  @Input() color: string;
  @Input() className: string;
  @Input() content: string;

  constructor() {}

  public onClick(event) {
    this.clicked.emit(event);
  }
}

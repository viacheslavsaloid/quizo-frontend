import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

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
  @Input() icon: string;
  @Input() color: string;
  @Input() title: string;
  @Input() class: string;

  constructor() {}

  public onClick(event) {
    this.clicked.emit(event);
  }
}

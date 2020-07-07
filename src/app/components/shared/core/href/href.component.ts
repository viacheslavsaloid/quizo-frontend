import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-href',
  templateUrl: './href.component.html',
  styleUrls: ['./href.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HrefComponent {
  @Input() routeTo: string = '';
  @Input() activeClass: string = 'active';
  @Input() text: string = '';
}

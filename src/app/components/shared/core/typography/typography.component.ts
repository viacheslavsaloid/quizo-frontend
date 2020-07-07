import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export type TypographyType = 'h' | 'p' | 'd';
export type TypographySize = '1' | '2' | '3' | '4' | '5' | '6';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent {
  @Input() public type: TypographyType = 'h';
  @Input() public size: TypographySize = '3';

  @Input() public margin: boolean = true;

  @Input() public data: string;
}

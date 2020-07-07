import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent implements OnInit {
  @Input() public type = 'h';
  @Input() public size = '3 ';

  constructor() {}

  ngOnInit() {}
}

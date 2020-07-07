import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent implements OnInit {
  @Input() actions: [];

  constructor() {}

  public trackByFn(index, item) {
    return index; // or item.id
  }

  ngOnInit(): void {}
}

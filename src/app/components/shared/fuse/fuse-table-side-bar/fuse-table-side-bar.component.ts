import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fuse-table-side-bar',
  templateUrl: './fuse-table-side-bar.component.html',
  styleUrls: ['./fuse-table-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseTableSidebarComponent {
  @Output() private changed = new EventEmitter();

  @Input() public user: any;
  @Input() public list: any;

  constructor() {}

  public onChange(e): void {
    this.changed.emit(e);
  }

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

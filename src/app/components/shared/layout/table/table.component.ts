import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  TemplateRef,
  ElementRef,
} from '@angular/core';

import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Output() private paged = new EventEmitter();
  @Output() private activated = new EventEmitter();
  @Output() private selected = new EventEmitter();

  @ContentChild('expandedRow') expandedRow: TemplateRef<ElementRef>;

  @Input() public rows: any[] = [];
  @Input() public columns: any[] = [];
  @Input() public loadingIndicator: boolean;
  @Input() public reorderable: boolean;

  @Input() public columnMode = ColumnMode.force;
  @Input() public headerHeight = 50;
  @Input() public footerHeight = 50;
  @Input() public rowHeight;
  @Input() public scrollbarH = true;
  @Input() public scrollbarV;
  @Input() public selectionType;
  @Input() public limit;
  @Input() public select = [];

  @Input() public externalPaging;
  @Input() public externalSorting;
  @Input() public count;
  @Input() public offset = 0;

  @Input() public selectAllRowsOnPage;
  @Input() public displayCheck = (row) => {};

  constructor() {}

  public onPage(e) {
    this.paged.emit(e);
  }
  public onActivate(e) {
    this.activated.emit(e);
  }
  public onSelect(e) {
    this.selected.emit(e);
  }
}

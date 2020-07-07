import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ContentChild,
  TemplateRef,
  ElementRef,
} from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-fuse-table',
  templateUrl: './fuse-table.component.html',
  styleUrls: ['./fuse-table.component.scss'],
  animations: fuseAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseTableComponent {
  @Output() private pageScrolled = new EventEmitter();
  @Output() private activaded = new EventEmitter();
  @Output() private selected = new EventEmitter();

  @ViewChild('myTable') table: any;

  @ContentChild('expandedRow') expandedRow: TemplateRef<ElementRef>;

  @Input() public rows: any[] = [];
  @Input() public columns: any[] = [];
  @Input() public loadingIndicator: boolean;
  @Input() public reorderable: boolean;

  @Input() public columnMode = ColumnMode.force;
  @Input() public headerHeight = 50;
  @Input() public footerHeight = 50;
  @Input() public rowHeight = 55;
  @Input() public scrollbarH = true;
  @Input() public scrollbarV;
  @Input() public selectionType;
  @Input() public limit;
  @Input() public select = [];

  @Input() public externalPaging;
  @Input() public externalSorting;
  @Input() public count;
  @Input() public offset = 0;

  constructor() {}

  public onPage(e) {
    this.pageScrolled.emit(e);
  }
  public onActivate(e) {
    this.activaded.emit(e);
  }
  public onSelect(e) {
    this.selected.emit(e);
  }
}

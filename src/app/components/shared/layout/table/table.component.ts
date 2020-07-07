import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() data: [];
  @Input() displayedColumns: any[];

  _columns: any[];
  get columns(): any[] {
    return this._columns;
  }

  @Input('columns')
  set columns(value: any[]) {
    this._columns = value;
    this.displayedColumns = this._columns ? this._columns.map((x) => x.prop) : [];
  }

  constructor() {}

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

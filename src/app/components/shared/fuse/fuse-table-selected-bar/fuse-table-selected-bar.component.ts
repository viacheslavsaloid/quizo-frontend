import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fuse-table-selected-bar',
  templateUrl: './fuse-table-selected-bar.component.html',
  styleUrls: ['./fuse-table-selected-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseTableSelectedBarComponent {
  @Output() private selected = new EventEmitter();
  @Output() private deselected = new EventEmitter();
  @Output() private deleted = new EventEmitter();

  @Input() public selectedContacts = [];

  selectAll(): void {
    this.selected.emit();
  }

  deselectAll(): void {
    this.deselected.emit();
  }

  deleteSelectedContacts(): void {
    this.deleted.emit();
  }
}

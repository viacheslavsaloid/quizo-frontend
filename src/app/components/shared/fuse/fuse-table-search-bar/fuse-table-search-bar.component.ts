import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-fuse-table-search-bar',
  templateUrl: './fuse-table-search-bar.component.html',
  styleUrls: ['./fuse-table-search-bar.component.scss'],
  animations: fuseAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseTableSearchBarComponent {
  @Output() public clicked = new EventEmitter();

  @Input() public searchInput: FormControl;

  constructor() {}

  public onClick(): void {
    this.clicked.emit();
  }
}

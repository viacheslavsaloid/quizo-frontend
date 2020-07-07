import { Observable } from 'rxjs';
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Output() clicked = new EventEmitter();
  @Output() sorted = new EventEmitter();

  @Input() items: [];
  @Input() items$: Observable<[]>;
  @Input() fabTrigger: {};

  @Input() enableSort = true;

  constructor() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.sorted.emit(event.container.data);
  }

  public get showSortButton() {
    return this.enableSort && this.sorted.observers.length;
  }

  public onClick = (item) => this.clicked.emit(item);

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

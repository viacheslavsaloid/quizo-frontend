import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tab } from 'app/models/components/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() tabs: Tab[];

  constructor() {}

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

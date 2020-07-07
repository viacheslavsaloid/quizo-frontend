import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface FabSpeedDealItem {
  icon: string;
  func: () => void;
}

@Component({
  selector: 'app-fab-speed-deal',
  templateUrl: './fab-speed-deal.component.html',
  styleUrls: ['./fab-speed-deal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabSpeedDealComponent implements OnInit {
  @Input() items: Array<FabSpeedDealItem>;
  @Input() trigger: FabSpeedDealItem;

  private _fixed = false;

  public open = false;
  public spin = false;
  public direction = 'up';
  public animationMode = 'fling';

  get fixed(): boolean {
    return this._fixed;
  }

  set fixed(fixed: boolean) {
    this._fixed = fixed;
    if (this._fixed) {
      this.open = true;
    }
  }

  constructor() {}

  public trackByFn(index, item) {
    return index; // or item.id
  }

  ngOnInit(): void {}
}

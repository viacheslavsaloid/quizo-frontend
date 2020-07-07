import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AppRoutes } from 'src/app/models/utils';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Output() burgerClicked = new EventEmitter();
  @Output() exitClicked = new EventEmitter();

  @Input() navLinks: AppRoutes;
  @Input() showTitle: boolean;

  constructor() {}

  public onBurgerClick = () => this.burgerClicked.emit();
  public onExitClick = () => this.exitClicked.emit();

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

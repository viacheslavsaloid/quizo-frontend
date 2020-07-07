import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() private burgerClicked = new EventEmitter();
  @Input() public showBurger: boolean;
  @Input() public user;

  constructor() {}

  public trackByFn(index) {
    return index;
  }

  public onBurgerClick() {
    this.burgerClicked.emit();
  }
}

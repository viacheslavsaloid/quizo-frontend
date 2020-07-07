import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fuse-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFuseLayout1Component {
  @Output() private toolbarLeftClicked = new EventEmitter();
  @Output() private toolbarRightClicked = new EventEmitter();
  @Output() private toolbarChatClicked = new EventEmitter();
  @Output() private toolbarLanguageChanged = new EventEmitter();

  @Input() public fuseConfig = null;
  @Input() public navigation = [];
  @Input() public languages = [];
  @Input() public selectedLanguage = {};

  constructor() {}

  public onToolbarLeftClick() {
    this.toolbarLeftClicked.emit();
  }
  public onToolbarRightClick() {
    this.toolbarRightClicked.emit();
  }
  public onToolbarChatClick() {
    this.toolbarChatClicked.emit();
  }
  public onToolbarLanguageChange(e) {
    this.toolbarLanguageChanged.emit(e);
  }
}

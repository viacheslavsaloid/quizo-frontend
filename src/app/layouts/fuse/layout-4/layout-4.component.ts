import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fuse-layout-4',
  templateUrl: './layout-4.component.html',
  styleUrls: ['./layout-4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFuseLayout4Component {
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

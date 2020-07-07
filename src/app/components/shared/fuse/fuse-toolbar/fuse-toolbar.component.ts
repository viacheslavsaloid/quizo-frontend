import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fuse-toolbar',
  templateUrl: './fuse-toolbar.component.html',
  styleUrls: ['./fuse-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseToolbarComponent {
  @Output() private searched = new EventEmitter();
  @Output() private leftClicked = new EventEmitter();
  @Output() private rightClicked = new EventEmitter();
  @Output() private chatClicked = new EventEmitter();
  @Output() private languageChanged = new EventEmitter();

  @Input() public selectedLanguage: any = {};
  @Input() public languages = [];
  @Input() public navigation = [];
  @Input() public userMenu = [];
  @Input() public user;

  public _config;
  @Input('config')
  set config(data: object) {
    this._config = data;
    this.setConfig(this._config);
  }
  get config() {
    return this._config;
  }

  public horizontalNavbar: boolean;
  public rightNavbar: boolean;
  public hiddenNavbar: boolean;

  constructor() {}

  public setConfig(config) {
    this.horizontalNavbar = config.layout.navbar.position === 'top';
    this.rightNavbar = config.layout.navbar.position === 'right';
    this.hiddenNavbar = config.layout.navbar.hidden === true;
  }

  public onLeftClick() {
    this.leftClicked.emit();
  }

  public onRightClick() {
    this.rightClicked.emit();
  }

  public onChatClick() {
    this.chatClicked.emit();
  }

  public search(e): void {
    this.searched.emit(e);
  }

  public onLanguageChange(e): void {
    this.languageChanged.emit(e);
  }

  public trackByFn(index, item) {
    return index; // or item.id
  }
}

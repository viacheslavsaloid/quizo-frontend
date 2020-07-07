import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fuse-quick-panel',
  templateUrl: './fuse-quick-panel.component.html',
  styleUrls: ['./fuse-quick-panel.component.scss'],
})
export class FuseQuickPanelComponent {
  date: Date;
  events: any[];
  notes: any[];
  settings: any;

  constructor() {
    this.date = new Date();
    this.settings = {
      notify: true,
      cloud: false,
      retro: true,
    };
  }
}

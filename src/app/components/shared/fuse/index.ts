import { FUSE_NAVBAR_THEME_COMPONENTS } from './fuse-navbar/theme';
import { FuseChatPanelComponent } from './fuse-chat-panel/fuse-chat-panel.component';
import { FuseContentComponent } from './fuse-content/fuse-content.component';
import { FuseFooterComponent } from './fuse-footer/fuse-footer.component';
import { FuseQuickPanelComponent } from './fuse-quick-panel/fuse-quick-panel.component';
import { FuseToolbarComponent } from './fuse-toolbar/fuse-toolbar.component';
import { FuseNavbarComponent } from './fuse-navbar/fuse-navbar.component';
import { FusePopupFormComponent } from './fuse-popup-form/fuse-popup-form.component';
import { FuseTableComponent } from './fuse-table/fuse-table.component';
import { FuseTableSelectedBarComponent } from './fuse-table-selected-bar/fuse-table-selected-bar.component';
import { FuseTableSidebarComponent } from './fuse-table-side-bar/fuse-table-side-bar.component';
import { FuseTableSearchBarComponent } from './fuse-table-search-bar/fuse-table-search-bar.component';

export * from './fuse-navbar/theme';
export * from './fuse-chat-panel/fuse-chat-panel.component';
export * from './fuse-content/fuse-content.component';
export * from './fuse-footer/fuse-footer.component';
export * from './fuse-quick-panel/fuse-quick-panel.component';
export * from './fuse-toolbar/fuse-toolbar.component';
export * from './fuse-popup-form/fuse-popup-form.component';
export * from './fuse-table/fuse-table.component';
export * from './fuse-table-selected-bar/fuse-table-selected-bar.component';
export * from './fuse-table-side-bar/fuse-table-side-bar.component';
export * from './fuse-table-search-bar/fuse-table-search-bar.component';

export const FUSE_COMPONENTS = [
  ...FUSE_NAVBAR_THEME_COMPONENTS,
  FuseChatPanelComponent,
  FuseContentComponent,
  FuseFooterComponent,
  FuseQuickPanelComponent,
  FuseToolbarComponent,
  FuseNavbarComponent,
  FusePopupFormComponent,
  FuseTableComponent,
  FuseTableSelectedBarComponent,
  FuseTableSidebarComponent,
  FuseTableSearchBarComponent,
];

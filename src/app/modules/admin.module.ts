import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AdminRoutingModule } from '../routes/admin/admin-routing.module';
import { SharedModule } from './shared.module';
import { AdminComponent } from '../containers/admin/admin.component';
import { ADMIN_PAGES } from '../pages/admin';
import { ADMIN_STATES } from '../store/states/admin';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { FUSE_LAYOUTS } from 'app/layouts/fuse';
import { ADMIN_SERVICES } from 'app/services/admin';

export const ADMIN_DECLARATIONS = [AdminComponent, ...ADMIN_PAGES, ...FUSE_LAYOUTS];
export const ADMIN_IMPORTS = [
  SharedModule,
  AdminRoutingModule,
  FuseProgressBarModule,
  FuseSidebarModule,
  FuseThemeOptionsModule,
  NgxsModule.forFeature(ADMIN_STATES),
];
export const ADMIN_PROVIDERS = [...ADMIN_SERVICES];

@NgModule({
  declarations: ADMIN_DECLARATIONS,
  imports: ADMIN_IMPORTS,
  providers: ADMIN_PROVIDERS,
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AdminRoutingModule } from '../routes/admin/admin-routing.module';
import { SharedModule } from './shared.module';
import { AdminComponent } from '../containers/admin/admin.component';
import { ADMIN_PAGES } from '../pages/admin';
import { ADMIN_STATES } from '../store/states/admin';
import { Layout1Component } from '../layouts/layout-1/layout-1.component';
import { ADMIN_SERVICES } from '../services/admin';

export const ADMIN_DECLARATIONS = [AdminComponent, Layout1Component, ...ADMIN_PAGES];
export const ADMIN_IMPORTS = [SharedModule, AdminRoutingModule, NgxsModule.forFeature(ADMIN_STATES)];
export const ADMIN_PROVIDERS = [...ADMIN_SERVICES];

@NgModule({
  declarations: ADMIN_DECLARATIONS,
  imports: ADMIN_IMPORTS,
  providers: ADMIN_PROVIDERS,
})
export class AdminModule {}

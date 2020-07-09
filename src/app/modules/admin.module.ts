import { NgModule } from '@angular/core';

import { AdminRoutingModule } from '../routes/admin/admin-routing.module';
import { SharedModule } from './shared.module';
import { AdminComponent } from '../containers/admin/admin.component';
import { ADMIN_PAGES } from '../pages/admin';
import { Layout1Component } from '../layouts/layout-1/layout-1.component';
import { GamesModule } from './games.module';

const ADMIN_DECLARATIONS = [AdminComponent, Layout1Component, ...ADMIN_PAGES];
const ADMIN_IMPORTS = [SharedModule, GamesModule, AdminRoutingModule];

@NgModule({
  declarations: ADMIN_DECLARATIONS,
  imports: ADMIN_IMPORTS,
})
export class AdminModule {}

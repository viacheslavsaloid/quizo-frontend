import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AdminRoutingModule } from '../routes/admin/admin-routing.module';
import { SharedModule } from './shared.module';
import { AdminComponent } from '../containers/admin/admin.component';
import { ADMIN_PAGES } from '../pages/admin';
import { ADMIN_STATES } from '../store/states/admin';

export const ADMIN_DECLARATIONS = [AdminComponent, ...ADMIN_PAGES];
export const ADMIN_IMPORTS = [SharedModule, AdminRoutingModule, NgxsModule.forFeature(ADMIN_STATES)];

@NgModule({
  declarations: ADMIN_DECLARATIONS,
  imports: ADMIN_IMPORTS,
})
export class AdminModule {}

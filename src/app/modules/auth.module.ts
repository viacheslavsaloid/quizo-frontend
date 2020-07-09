import { NgModule } from '@angular/core';

import { AuthRoutingModule } from '../routes/auth/auth-routing.module';
import { SharedModule } from './shared.module';
import { AuthComponent } from '../containers/auth/auth.component';
import { AUTH_PAGES } from '../pages/auth';

const AUTH_DECLARATIONS = [AuthComponent, ...AUTH_PAGES];
const AUTH_IMPORTS = [SharedModule, AuthRoutingModule];

@NgModule({
  declarations: AUTH_DECLARATIONS,
  imports: AUTH_IMPORTS,
})
export class AuthModule {}

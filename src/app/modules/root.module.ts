import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from '../routes/root/root-routing.module';
import { RootComponent } from '../containers/root/root.component';
import { ROOT_SERVICES } from '../services/root';
import { ROOT_GUARDS } from '../guards';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { ROOT_STATES } from '../store/states/root';
import {
  NGXS_CONFIGS,
  TRANSLATE_CONFIGS,
  FORMLY_CONFIGS,
  TOASTR_CONFIGS,
  JWT_CONFIGS,
  FUSE_CONFIGS,
} from '../settings/configs';
import { TranslateModule } from '@ngx-translate/core';
import { FormlyModule } from '@ngx-formly/core';
import { ROOT_SETTINGS_PROVIDERS } from '../settings/providers';
import { ROOT_LOADERS } from '../settings/loaders';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { ROOT_INTERCEPTORS } from '../interceptors';
import { FuseModule } from '@fuse/fuse.module';
import { ROOT_HOOKS } from 'app/utils/hooks';
import { MatDialogModule } from '@angular/material/dialog';
import { DragulaModule, DragulaService } from 'ng2-dragula';

export const ROOT_DECLARATIONS = [RootComponent];
export const ROOT_IMPORTS = [
  CommonModule,
  RootRoutingModule,
  HttpClientModule,

  FormlyModule.forRoot(FORMLY_CONFIGS),

  TranslateModule.forRoot(TRANSLATE_CONFIGS),

  ToastrModule.forRoot(TOASTR_CONFIGS),

  JwtModule.forRoot(JWT_CONFIGS),

  // Fuse modules
  FuseModule.forRoot(FUSE_CONFIGS),

  // <NGXS
  NgxsModule.forRoot(ROOT_STATES, NGXS_CONFIGS),
  NgxsLoggerPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsDataPluginModule.forRoot(),
  // NGXS>

  // Material Dialog for popup service
  MatDialogModule,

  DragulaModule.forRoot(),
];
export const ROOT_PROVIDERS = [
  ...ROOT_SERVICES,
  ...ROOT_GUARDS,
  ...ROOT_SETTINGS_PROVIDERS,
  ...ROOT_LOADERS,
  ...ROOT_INTERCEPTORS,
  ...ROOT_HOOKS,
];

@NgModule({
  declarations: ROOT_DECLARATIONS,
  imports: ROOT_IMPORTS,
  providers: ROOT_PROVIDERS,
})
export class RootModule {}

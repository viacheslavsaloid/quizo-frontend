import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { TranslateModule } from '@ngx-translate/core';
import { FormlyModule } from '@ngx-formly/core';
import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { JwtModule } from '@auth0/angular-jwt';
import {
  NGXS_CONFIGS,
  TRANSLATE_CONFIGS,
  FORMLY_CONFIGS,
  TOASTR_CONFIGS,
  JWT_CONFIGS,
  PROGRESSBAR_CONFIGS,
} from '../settings/configs';
import { CORE_SETTINGS_PROVIDERS } from '../settings/providers';
import { CORE_LOADERS } from '../settings/loaders';
import { CORE_INTERCEPTORS } from '../interceptors';
import { CORE_STATES } from '../store/states/core';
import { CoreRoutingModule } from '../routes/core/core-routing.module';
import { CoreComponent } from '../containers/core/core.component';
import { CORE_SERVICES } from '../services/core';
import { CORE_GUARDS } from '../guards';
import { CORE_HOOKS } from '../hooks';
import { MatDialogModule } from '@angular/material/dialog';

export const CORE_DECLARATIONS = [CoreComponent];
export const CORE_IMPORTS = [
  CommonModule,
  CoreRoutingModule,
  HttpClientModule,

  FormlyModule.forRoot(FORMLY_CONFIGS),

  TranslateModule.forRoot(TRANSLATE_CONFIGS),

  ToastrModule.forRoot(TOASTR_CONFIGS),

  JwtModule.forRoot(JWT_CONFIGS),

  NgProgressModule.withConfig(PROGRESSBAR_CONFIGS),
  // <NGXS
  NgxsModule.forRoot(CORE_STATES, NGXS_CONFIGS),
  NgxsLoggerPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsDataPluginModule.forRoot(),
  // NGXS>

  MatDialogModule,
];
export const CORE_PROVIDERS = [
  ...CORE_SERVICES,
  ...CORE_GUARDS,
  ...CORE_SETTINGS_PROVIDERS,
  ...CORE_LOADERS,
  ...CORE_INTERCEPTORS,
  ...CORE_HOOKS,
];

@NgModule({
  declarations: CORE_DECLARATIONS,
  imports: CORE_IMPORTS,
  providers: CORE_PROVIDERS,
})
export class CoreModule {}

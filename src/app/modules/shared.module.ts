import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_COMPONENTS } from '../components/shared';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { RouterModule } from '@angular/router';
import { DynamicIoModule } from 'ng-dynamic-component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export const SHARED_IMPORTS = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FormlyModule,
  FormlyMaterialModule,
  TranslateModule,
  NgProgressModule,
  NgxDatatableModule,
  DynamicIoModule,
];
export const SHARED_DECLARATIONS = [...SHARED_COMPONENTS];
export const SHARED_EXPORTS = [...SHARED_IMPORTS, ...SHARED_DECLARATIONS];
export const SHARED_PROVIDERS = [];

@NgModule({
  declarations: SHARED_DECLARATIONS,
  imports: SHARED_IMPORTS,
  exports: SHARED_EXPORTS,
  providers: SHARED_PROVIDERS,
})
export class SharedModule {}

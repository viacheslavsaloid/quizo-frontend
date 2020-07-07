import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

const MATERIAL_EXPORTS = [
  LayoutModule,
  DragDropModule,
  ClipboardModule,

  MatGridListModule,
  MatTabsModule,
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule,
  MatExpansionModule,
  MatChipsModule,
  MatNativeDateModule,
  MatDatepickerModule,

  MaterialFileInputModule,
  NgxMaterialTimepickerModule,
  EcoFabSpeedDialModule,
];

@NgModule({
  exports: MATERIAL_EXPORTS,
})
export class MaterialModule {}

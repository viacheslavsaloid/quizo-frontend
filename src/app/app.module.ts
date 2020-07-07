import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreComponent } from './containers/core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule],
  bootstrap: [CoreComponent],
})
export class AppModule {}

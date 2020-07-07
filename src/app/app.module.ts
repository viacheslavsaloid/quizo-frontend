import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './containers/root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootModule } from './modules/root.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RootModule],
  bootstrap: [RootComponent],
})
export class AppModule {}

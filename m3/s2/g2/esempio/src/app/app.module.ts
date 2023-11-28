import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pages1Component } from './pages/pages1/pages1.component';
import { Pages2Component } from './pages/pages2/pages2.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages1Component,
    Pages2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

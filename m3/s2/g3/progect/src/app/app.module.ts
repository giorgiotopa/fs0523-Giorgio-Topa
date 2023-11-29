import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttiviComponent } from './post/attivi/attivi.component';
import { InattiviComponent } from './post/inattivi/inattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    AttiviComponent,
    InattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

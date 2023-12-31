import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttiviComponent } from './post/attivi/attivi.component';
import { InattiviComponent } from './post/inattivi/inattivi.component';
import { EvidenziaDirective } from './evidenzia.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttiviComponent,
    InattiviComponent,
    EvidenziaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

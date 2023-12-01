import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CompletatiComponent } from './pages/completati/completati.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    CompletatiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

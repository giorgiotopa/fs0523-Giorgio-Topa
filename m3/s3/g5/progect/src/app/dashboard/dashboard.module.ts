import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { RouterLink } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PreferitiComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    AuthRoutingModule
  ]
})
export class DashboardModule { }

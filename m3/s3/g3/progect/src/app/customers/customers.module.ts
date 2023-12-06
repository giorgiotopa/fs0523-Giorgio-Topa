import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    CustomersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CustomersModule { }

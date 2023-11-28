import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages1Component } from './pages/pages1/pages1.component';
import { Pages2Component } from './pages/pages2/pages2.component';

const routes: Routes = [

{
  path:'pages1',
  component: Pages1Component
},
{
  path:'pages2',
  component: Pages2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

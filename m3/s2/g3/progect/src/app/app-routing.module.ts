import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttiviComponent } from './post/attivi/attivi.component';
import { InattiviComponent } from './post/inattivi/inattivi.component';

const routes: Routes = [
{
  path: 'attivi',
  component: AttiviComponent
},
{
  path: 'inattivi',
  component: InattiviComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

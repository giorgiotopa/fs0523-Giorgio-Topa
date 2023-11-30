import { CreateComponent } from './pages/create/create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo : '/menu'
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
      path: 'menu/edit/:id',
      component: EditComponent
  },
  {
    path: 'crea-smartphone',
    component: CreateComponent
  },
  {
  path:'**',
  component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

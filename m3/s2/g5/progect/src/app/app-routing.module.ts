import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { CompletatiComponent } from './pages/completati/completati.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo : '/todo',
  },
  {
    path:'todo',
    component: TodosComponent
  },
  {
      path: 'completati',
      component: CompletatiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

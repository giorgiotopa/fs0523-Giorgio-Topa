import { TodosComponent } from './pages/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './pages/completati/completati.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo : '/todos'
  },
  {
    path:'todos',
    component: TodosComponent
  },
  {
    path:'completati',
    component: CompletatiComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

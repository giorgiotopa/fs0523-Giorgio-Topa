import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todoArr:Todo[] = [];

  constructor(
    private todoSvc:TodoService,
    ){}

    ngOnInit() {
      this.todoSvc.getAll().then(todo => this.todoArr = todo)
    }

  newTodo:Partial<Todo> = {
    completed: false,
  };

  loading:boolean = false;

    save(){
    this.loading = true;
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
    })
    this.ngOnInit();
    this.newTodo.title = ''
  }

  toggleStatus(id:number){
  this.todoSvc.getById(id).then(todo => {
    todo.completed = !todo.completed;
    console.log(todo)
    this.todoSvc.update(todo)
    this.todoArr = this.todoArr.filter(eliminatodo => eliminatodo.id !== id);
  })
  }

  elimina(id:number){
    this.todoSvc.getById(id).then(todo => {
      todo.completed = !todo.completed;
      this.todoSvc.delete(todo);
      this.ngOnInit();
    })
    }


}

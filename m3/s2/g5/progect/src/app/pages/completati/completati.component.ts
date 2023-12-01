import { Component } from '@angular/core';
import { ITodo } from '../../Models/i-todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {

  todoArr:ITodo[]= [];

  constructor(private todoSvc:TodoService){}

  ngOnInit() {
    this.todoSvc.getAll().then(todo => this.todoArr = todo.filter(todo => todo.completed))
  }

  // this.posts.filter(p => !p.active)

  updateTodo(){
    // this.todoArr = this.todoSvc.getCompletedTodo()
  }
}

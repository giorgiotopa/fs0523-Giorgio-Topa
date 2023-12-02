import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {

  todoArr:Todo[]= [];

  constructor(private todoSvc:TodoService){}

  caricamento:boolean = false;
  eliminazione:boolean = false;

  ngOnInit() {
    this.caricamento = true
    this.todoSvc.getAll()
    .then(todo => this.todoArr = todo.filter(todo => todo.completed))
    .then(() => this.caricamento = false)
  }

  toggleStatus(id:number){
    this.caricamento = true
    this.todoSvc.getById(id).then(todo => {
      todo.completed = !todo.completed;
      this.todoSvc.update(todo)
      this.todoArr = this.todoArr.filter(eliminatodo => eliminatodo.id !== id);
    }).then(() => this.caricamento = false)
  }

  elimina(id:number){
    this.eliminazione= true
    this.todoSvc.getById(id).then(todo => {
      todo.completed = !todo.completed;
      this.todoSvc.delete(todo);
      this.todoArr = this.todoArr.filter(todoArrey => todoArrey.title !== todo.title);
    }).then(() => this.eliminazione = false)
    }

}

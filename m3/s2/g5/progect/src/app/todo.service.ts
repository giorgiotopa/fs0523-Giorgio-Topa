import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';
import { ITodo } from './Models/i-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/todo'


  getAll():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
   }

   getById(id:number):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  create(todo:Partial<Todo>):Promise<Todo>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)

    }).then(res => res.json())
  }

  update(todo:Todo):Promise<Todo>{
    return fetch(this.apiUrl+`/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  delete(todo:Todo):Promise<Todo>{
    return fetch(this.apiUrl+`/${todo.id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

  toggleActive(todo:Todo):Promise<Todo>{
    return fetch(this.apiUrl+`/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
    .then(todo =>
      todo.forEach( (t:Todo) => {
        t.completed = !t.completed;
      })

    )
  }


}

import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/todo'


  getAll():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
   }

   getById(id:string):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  create(smartphone:Partial<Todo>):Promise<Todo>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(smartphone)

    }).then(res => res.json())
  }

  update(smartphone:Todo):Promise<Todo>{
    return fetch(this.apiUrl+`/${smartphone.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(smartphone)
    }).then(res => res.json())
  }

  delete(id:string):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }





}

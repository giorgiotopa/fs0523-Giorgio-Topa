import { ITodo } from "./i-todo";


export class Todo implements ITodo {
  constructor(
    public title:string,
    public completed:boolean,
    public id?:number
    ){}
}

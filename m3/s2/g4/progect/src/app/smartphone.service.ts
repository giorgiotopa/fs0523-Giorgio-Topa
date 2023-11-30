import { Injectable } from '@angular/core';
import { Smartphone } from './Models/smartphone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/smartphone'

  getAll():Promise<Smartphone[]>{
   return fetch(this.apiUrl).then(res => res.json())
  }

  getbyId(id:string):Promise<Smartphone>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  create(smartphone:Partial<Smartphone>):Promise<Smartphone>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(smartphone)

    }).then(res => res.json())
  }

  update(smartphone:Smartphone):Promise<Smartphone>{
    return fetch(this.apiUrl+`/${smartphone.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(smartphone)
    }).then(res => res.json())
  }

  delete(id:string):Promise<Smartphone>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }
}


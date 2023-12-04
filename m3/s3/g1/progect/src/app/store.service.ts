import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { iProduct } from './Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiUrl:string = 'https://dummyjson.com/products';

  constructor(
    private http:HttpClient
  ) { }

  // getAll():Observable <iProduct[]> {
  //   return this.http.get<iProduct[]>(this.apiUrl);
  // }
  getAll():Observable <any> {
    return this.http.get<any>(this.apiUrl);
  }

}

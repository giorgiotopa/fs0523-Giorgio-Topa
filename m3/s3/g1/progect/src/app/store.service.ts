import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { iProduct } from './Models/iproduct';
import { Subject, map } from 'rxjs';

type responseData = {
  products : iProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiUrl:string = 'https://dummyjson.com/products';

  favoriteSubject:Subject<iProduct> = new Subject()
  favorite$ = this.favoriteSubject.asObservable()

  cartSubject:Subject<iProduct> = new Subject()
  cart$ = this.cartSubject.asObservable()

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<responseData>(this.apiUrl)
    .pipe(map(res => res.products));
  }
  addFavorite(product:iProduct){
    this.favoriteSubject.next(product);
  }

  addToCart(product:iProduct){
    this.cartSubject.next(product);
  }


}

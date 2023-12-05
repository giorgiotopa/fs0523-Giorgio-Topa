import { iProduct } from '../Models/iproduct';
import { StoreService } from './../store.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  product:iProduct[] = [];
  // product:any[] = [];
  imageProduct:any[] = [];

  constructor(private productSvc:StoreService){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(data => this.product = data);
      console.log(this.imageProduct);
      console.log(this.product);
    }

    addToFavorite(product:iProduct){
      this.productSvc.addFavorite(product)
    }
    addToCart(product:iProduct){
      this.productSvc.addToCart(product)
    }

  }


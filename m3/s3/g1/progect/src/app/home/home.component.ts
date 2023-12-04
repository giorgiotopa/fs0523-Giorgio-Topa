import { iProduct } from '../Models/iproduct';
import { StoreService } from './../store.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // product:iProduct[] = [];
  product:any[] = [];
  imageProduct:any[] = [];

  constructor(private productSvc:StoreService){}

  ngOnInit(){
    this.productSvc.getAll().subscribe(data =>{
      console.log(data.products);
      let i = 0
      data.products.forEach((product:any) =>{
        this.imageProduct[i] = product.images
        i++;
      })
      console.log(this.imageProduct);

      this.product = data.products;
      console.log(this.product);
    })
  }
}

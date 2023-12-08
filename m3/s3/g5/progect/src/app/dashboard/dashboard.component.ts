import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { iCity } from './Models/i-city';
import { iLocalClimate } from './Models/i-local-climate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private dashboardSvc:DashboardService){}

  city!:string;
  arrayCity:iCity[] = [];
  weatherLocal!:iLocalClimate
  // weather!:{
  //   id:number
  //   main:string
  //   description:string
  //   icon:string
  // }


  ngOnInit(){
    this.dashboardSvc.getClimate1().subscribe(prod => console.log(prod));
    this.dashboardSvc.getCity(this.city).subscribe(prod => console.log(prod));
  }

  invia(){
    this.arrayCity.length = 0;
    this.dashboardSvc.getCity(this.city).subscribe(prod =>{
      prod.forEach(c =>{
        this.arrayCity.push(c);
      })
      this.city = '';
    })
  }
  cerca(lat:number,lon:number){
    this.dashboardSvc.getClimate(lat,lon).subscribe(prod =>{
      console.log(prod);
      prod.list.forEach(c =>{
        console.log(c);


        // this.weatherLocal.list.push(c);
      });
    });
    this.arrayCity.length = 0;
  }

}

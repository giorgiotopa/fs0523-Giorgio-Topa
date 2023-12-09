import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { iCity } from './Models/i-city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private dashboardSvc:DashboardService){}

  city!:string;
  arrayCity:iCity[] = [];
  arrayWeather:any[] =[]; // Michele io lo so che any qua non va bene, ma questo non ho capito come tipizzarlo :(
  arratTime:any[]=[]; // Idem con patate

  weather!:[{
    id:number
    main:string
    description:string
    icon:string
  }]

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
      this.city = prod.city.name
      prod.list.forEach(c =>{
        this.arratTime.push(c.dt_txt);
        this.weather = c.weather
        this.arrayWeather.push(this.weather);
      });
    });
    this.arrayCity.length = 0;
  }

  // addPrefer(city:string){

  // }


}

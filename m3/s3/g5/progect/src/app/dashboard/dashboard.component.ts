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


  ngOnInit(){
    this.dashboardSvc.getClimate().subscribe(prod => console.log(prod));
    this.dashboardSvc.getCity(this.city).subscribe(prod => console.log(prod));
  }

  invia(){
    this.arrayCity.length = 0;
    this.dashboardSvc.addCity(this.city);
    this.dashboardSvc.getCity(this.city).subscribe(prod =>{
      prod.forEach(c =>{
        this.arrayCity.push(c);
      })
      console.log(this.arrayCity);
      this.city = '';

    } )
  }

}

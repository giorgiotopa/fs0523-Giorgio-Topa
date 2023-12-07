import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private dashboardSvc:DashboardService){}

  city:string ='';


  ngOnInit(){
    this.dashboardSvc.getAll().subscribe(prod => console.log(prod));
    this.dashboardSvc.getCity().subscribe(prod => console.log(prod));
  }

  invia(){
    this.dashboardSvc.addCity(this.city);
    this.dashboardSvc.getCity1(this.city).subscribe(prod => console.log(prod))
  }

}

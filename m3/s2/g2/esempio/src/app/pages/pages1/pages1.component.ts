import { Component, OnInit } from '@angular/core';
import { ISmartphone } from '../../Models/interface';
import { SmartphoneService } from '../../smartphone.service';

@Component({
  selector: 'app-pages1',
  templateUrl: './pages1.component.html',
  styleUrl: './pages1.component.scss'
})
export class Pages1Component{

  smartphone:ISmartphone[] = [];

  constructor(private smartphoneSvc:SmartphoneService){}

  ngOnInit(){
    this.smartphone = this.smartphoneSvc.smartphone
  }

}

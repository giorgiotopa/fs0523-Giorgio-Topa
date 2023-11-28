import { Component } from '@angular/core';
import { ISmartphone } from '../../Models/interface';
import { SmartphoneService } from '../../smartphone.service';

@Component({
  selector: 'app-pages2',
  templateUrl: './pages2.component.html',
  styleUrl: './pages2.component.scss'
})
export class Pages2Component {

  smartphone:ISmartphone[] = [];

  constructor(private smartphoneSvc:SmartphoneService){}

  ngOnInit(){
    this.smartphone = this.smartphoneSvc.smartphone
  }
}

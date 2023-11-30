import { SmartphoneService } from '../../smartphone.service';
import { Smartphone } from './../../Models/smartphone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  smartphone:Smartphone[] = [];

  constructor(private smartphoneSvc:SmartphoneService){}


  ngOnInit(){
    this.smartphoneSvc.getAll().then(smartphone => this.smartphone = smartphone)
  }

  delete(id:string|undefined){
    if(!id) return //blocca la funzione

    this.smartphoneSvc.delete(id).then(res => {

      this.smartphone =  this.smartphone.filter(p => p.id != id);

       alert(`Smartphone con id ${id} eliminato`)
    })
  }



}

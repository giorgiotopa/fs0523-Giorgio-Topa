import { Component } from '@angular/core';
import { Smartphone } from '../../Models/smartphone';
import { SmartphoneService } from '../../smartphone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  constructor(
    private smartphoneSvc:SmartphoneService,
    private router:Router
    ){}

  newSmartphone:Partial<Smartphone> = {
    active: '0'
  };

  oldSmartphone:Smartphone|null = null;

  loading:boolean = false;

  save(){
    this.loading = true;
    this.newSmartphone.active = Boolean(Number(this.newSmartphone.active));
    this.smartphoneSvc.create(this.newSmartphone).then(res => {
      this.loading = false
      this.oldSmartphone = res;

    })
  }

}

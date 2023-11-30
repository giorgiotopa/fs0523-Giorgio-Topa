import { Smartphone } from './../../Models/smartphone';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartphoneService } from '../../smartphone.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  constructor(
    private route: ActivatedRoute,//per ottenere dati sulla rotta attiva
    private smartphoneSvc:SmartphoneService
    ){}

   smartphone!:Smartphone


   ngOnInit(){
    //usa questo per leggere il parametro id nell'url
    this.route.params.subscribe((params:any) => {

      this.smartphoneSvc.getbyId(params.id).then(res => this.smartphone = res)

    })

  }

  save(){
    this.smartphoneSvc.update(this.smartphone).then( res => {

    })
  }
}

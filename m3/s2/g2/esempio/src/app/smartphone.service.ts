import { Injectable } from '@angular/core';
import { ISmartphone } from './Models/interface';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  smartphone:ISmartphone[] = [
      {
        "id":0,
        "marca":'Samsung',
        "prezzo":950,
        "disponibile":true
      },
      {
        "id":0,
        "marca":'Google',
        "prezzo":850,
        "disponibile":true
      },
      {
        "id":0,
        "marca":'Oppo',
        "prezzo":250,
        "disponibile":true
      }
  ];

}

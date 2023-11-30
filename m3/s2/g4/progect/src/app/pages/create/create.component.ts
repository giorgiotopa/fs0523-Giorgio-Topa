import { Component } from '@angular/core';
import { Smartphone } from '../../Models/smartphone';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  newSmartphone:Partial<Smartphone> = {
    active: '0'
  };


}

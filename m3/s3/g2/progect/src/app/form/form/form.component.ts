import { Component } from '@angular/core';
import { iForm } from '../../i-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formArray:iForm[] = [];

  formObj:iForm = {
    nome: '',
    cognome: '',
    password: '',
    confermaPassword: '',
    genere: '',
    immagineProfilo: '',
    biografia: '',
    username: ''
  };


  submit(){
    this.formArray.push(this.formObj);
    console.log(this.formArray);

    }



  }





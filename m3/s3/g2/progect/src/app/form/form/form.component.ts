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
    this.formObj.nome = '';
    this.formObj.cognome = '';
    this.formObj.password = '';
    this.formObj.confermaPassword = '';
    this.formObj.genere = '';
    this.formObj.biografia = '';
    this.formObj.username = '';

    }



  }





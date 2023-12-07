import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:iLogin = {
    email: 'mario@rossi.it',
    password: 'password'
  }

  saveLogin(){
    this.authSvc.login(this.loginData)
    .subscribe(data => {
        this.router.navigate(['/dashboard']);
    })
  }

}

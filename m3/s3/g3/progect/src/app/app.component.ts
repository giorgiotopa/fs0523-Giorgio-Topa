import { Component } from '@angular/core';
import { AuthService } from './customers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'progect';

  constructor(private authSvc:AuthService){}

  userName:string|undefined = '';

  ngOnInit(){
    this.authSvc.user$.subscribe(accessData => {
        this.userName = accessData?.user.nome
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAccessData } from '../Models/i-access-data';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { iRegister } from '../Models/register';
import { iLogin } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<IAccessData|null>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))


  constructor( private http:HttpClient,
    private router:Router) {

      this.restoreUser()
  }

  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login'

  signUp(data:iRegister):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.registerUrl, data)
  }

  login(data:iLogin):Observable<IAccessData>{
    return this.http.post<IAccessData>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))


      this.autoLogout(data.accessToken)
    }))
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logout()
    },expMs)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/customers/login']);
  }

  restoreUser(){

      const userJson:string|null =  localStorage.getItem('accessData');
      if(!userJson) return;

      const accessData:IAccessData = JSON.parse(userJson);
      if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

      this.autoLogout(accessData.accessToken)
      this.authSubject.next(accessData)
  }








}

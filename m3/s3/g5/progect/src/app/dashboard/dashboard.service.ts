import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  citySubject:Subject<string> = new Subject();//ingresso dati

  city$ = this.citySubject.asObservable();//uscita dati

  constructor(private http:HttpClient) { }

  apiKey:string = 'b8cebc030b7ab67c7fd9147cb1c6390f'
  apiUrl:string = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=b8cebc030b7ab67c7fd9147cb1c6390f';
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  cityUrl:string = 'http://api.openweathermap.org/geo/1.0/direct?q='+`/${this.citySubject}`+'&limit=5&appid=b8cebc030b7ab67c7fd9147cb1c6390f'


  addCity(txt:string){
    this.citySubject.next(txt)
    console.log(txt);
  }

  getAll(){
    return this.http.get<any>(this.apiUrl)
    // .pipe(map(r => r.products))
  }

  getCity(){
    return this.http.get<any>(this.cityUrl)
  }
  getCity1(city:string){
    return this.http.get<any>('http://api.openweathermap.org/geo/1.0/direct?q='+`/${city}`+'&limit=5&appid=b8cebc030b7ab67c7fd9147cb1c6390f')
  }








}

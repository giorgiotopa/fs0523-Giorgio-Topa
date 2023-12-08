import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { iCity } from './Models/i-city';
import { iLocalClimate } from './Models/i-local-climate';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  apiKey:string = 'b8cebc030b7ab67c7fd9147cb1c6390f'
  apiUrl:string = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=b8cebc030b7ab67c7fd9147cb1c6390f';
  cityUrl:string = 'http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=b8cebc030b7ab67c7fd9147cb1c6390f'


  getClimate1(){
    return this.http.get<iLocalClimate>(this.apiUrl)
    // .pipe(map(r => r.products))
  }
  getClimate(lat:number, lon:number){
    return this.http.get<iLocalClimate>('https://api.openweathermap.org/data/2.5/forecast?lat='+`${lat}`+'&lon='+`${lon}`+'&appid=b8cebc030b7ab67c7fd9147cb1c6390f')
    // .pipe(map(r => r.products))
  }

  getCity(city:string){
    return this.http.get<iCity[]>('http://api.openweathermap.org/geo/1.0/direct?q='+`/${city}`+'&limit=5&appid=b8cebc030b7ab67c7fd9147cb1c6390f')
  }








}

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

  getClimate(lat:number, lon:number){
    return this.http.get<iLocalClimate>('https://api.openweathermap.org/data/2.5/forecast?lat='+`${lat}`+'&lon='+`${lon}`+'&appid=b8cebc030b7ab67c7fd9147cb1c6390f')
  }

  getCity(city:string){
    return this.http.get<iCity[]>('http://api.openweathermap.org/geo/1.0/direct?q='+`/${city}`+'&limit=5&appid=b8cebc030b7ab67c7fd9147cb1c6390f')
  }


}

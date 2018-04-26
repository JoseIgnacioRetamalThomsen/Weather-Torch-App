import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';

/*
  Generated class for the DayWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DayWeatherProvider {

  API1:string ="7ec084916acd2a66bb0815cc97102f18";

  constructor(public http: HttpClient) {
    console.log('Hello DayWeatherProvider Provider');
  }


  getWeather():Observable<any>{

   
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=7ec084916acd2a66bb0815cc97102f18");

   

  }
}

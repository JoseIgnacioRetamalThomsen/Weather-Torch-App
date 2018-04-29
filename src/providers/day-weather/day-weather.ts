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


  getWeather(lat:number,lon:number):Observable<any>{

  let api:string= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID="+this.API1;
console.log(api);
   // return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=53.348&lon=-6.2482&APPID=7ec084916acd2a66bb0815cc97102f18");
   return this.http.get(api);
   //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
   //api.openweathermap.org/data/2.5/weather?lat=&lon=139 53.348
//http://api.openweathermap.org/data/2.5/weather?lat=-6.24828&lon=53.348&APPID=7ec084916acd2a66bb0815cc97102f18"

//google key
//AIzaSyA2lJ0i8bXMn1Z3SG8w585KClri8fDvh3o 
//https://maps.googleapis.com/maps/api/geocode/json?latlng=51.5033640,-0.1276250&key=AIzaSyA2lJ0i8bXMn1Z3SG8w585KClri8fDvh3o
//http://api.openweathermap.org/data/2.5/weather?q=ballybaan&APPID=7ec084916acd2a66bb0815cc97102f18
//http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&APPID=7ec084916acd2a66bb0815cc97102f18
  }
}

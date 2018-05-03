import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Weather Provider, give weather data from API

  Jose Retamal
*/
@Injectable()
export class DayWeatherProvider {

  //key 
  keyAPI: string = "7ec084916acd2a66bb0815cc97102f18";

  constructor(public http: HttpClient) { }

  //return actual weather from geocordinates
  getWeather(lat: number, lon: number): Observable<any> {

    //compose http adress for request
    let api: string = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + this.keyAPI;

    return this.http.get(api);

  }//getWeather

  //return 5 day forecast from geocordinates
  getForecast5Days(lat: number, lon: number): Observable<any> {

    //compose http adress for request
    let api: string = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&APPID=" + this.keyAPI;


    return this.http.get(api);

  }//getForecast5Days


  //return actual weather from city name 
  getForecastByCityName(city: string): Observable<any> {

    //compose http adress for request
    let api: string = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.keyAPI;
    
    return this.http.get(api);

  }//getForecastByCityName

  //return 5 days forecast from city name
  getForecast5DaysCityName(city: string): Observable<any> {

    //compose http adress for request

    let api: string = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + this.keyAPI;

    return this.http.get(api);

  }//getForecast5DaysCityName

}//DayWeatherProvider

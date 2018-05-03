import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DayWeatherProvider } from '../../providers/day-weather/day-weather';
/**
 * Global weather page
 *Weather can be search for any city
 * 
 * Jose Retamal
 */

@IonicPage()
@Component({
  selector: 'page-global-weather',
  templateUrl: 'global-weather.html',
})
export class GlobalWeatherPage {


  //input in search bar
  myInput: any;

  //variables for read weather api
  actualWeather: any = [];
  forecastWeather: any[];
  forecast: any = [];

  //for check if data is load and show api
  actualWeatherData = false;
  isForecastData = false;
  shouldShowCancel = false;

  notFound = false;

  constructor(private navCtrl: NavController, private dayWeatherProvider: DayWeatherProvider) {}

  //call on swipeRigh event
  swipeRight() {

    //navigate to Local
    this.navCtrl.parent.select(0);

  }

//seach for the city, using the string my input
  searchForCity() {

    //get actual weather
    this.dayWeatherProvider.getForecastByCityName(this.myInput).subscribe(data => {

      this.actualWeather = data;
      this.actualWeatherData = true;

      //check if data is good
      if (data.cod != 200) {

        this.notFound = true;
        this.actualWeatherData = false;

      }

    });//this.dayWeatherProvider.getForecastByCityName(this.myInput).subscribe(data 

    //get 5 days forecast
    this.dayWeatherProvider.getForecast5DaysCityName(this.myInput).subscribe(data => {

      this.forecastWeather = data.list;

      //create a 5 day forecast, only one for day
      var d: any;

      //set the array to blank 
      while (this.forecast.length > 0)
        this.forecast.pop();

      for (var i = 0; i < this.forecastWeather.length; i++) {
        d = new Date(this.forecastWeather[i].dt * 1000);
        if (d.getHours() == 13) {
          this.forecast.push(this.forecastWeather[i]);
        }
      }

      this.isForecastData = true;

    });//this.dayWeatherProvider.getForecast5DaysCityName(this.myInput).subscribe(data 

  }//searchForCity

  //triged when input change do nothig for the moment
  onInput()
  {

  }

}//GlobalWeatherPage


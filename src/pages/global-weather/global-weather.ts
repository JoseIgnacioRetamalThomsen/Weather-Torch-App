import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DayWeatherProvider } from '../../providers/day-weather/day-weather';
/**
 * Generated class for the GlobalWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global-weather',
  templateUrl: 'global-weather.html',
})
export class GlobalWeatherPage {


  myInput: any;

  actualWeather: any = [];

  actualWeatherData = false;

  forecastWeather: any[];

  isForecastData = false;

  forecast: any = [];

  shouldShowCancel = false;

  notFound=false;
  constructor(private navCtrl: NavController, private dayWeatherProvider: DayWeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalWeatherPage');
  }


  

  swipeRight() {
    //navigate to Local
    this.navCtrl.parent.select(0);
  }

  onInput() {
    console.log(this.myInput);
  }

  searchForCity() {
    this.dayWeatherProvider.getForecastByCityName(this.myInput).subscribe(data => {

      this.actualWeather = data;
      this.actualWeatherData = true;

      if(data.cod!=200)
      {
        this.notFound =true;
        this.actualWeatherData = false;
      }
    });

    this.dayWeatherProvider.getForecast5DaysCityName(this.myInput).subscribe(data => {

      this.forecastWeather = data.list;

      //create a 5 day forecast, only one for day
      var d: any;

      //set the array to blank 
          while( this.forecast.length  > 0) 
        this.forecast.pop();
    
      for (var i = 0; i < this.forecastWeather.length; i++) {
        d = new Date(this.forecastWeather[i].dt * 1000);
        if (d.getHours() == 13) {
          this.forecast.push(this.forecastWeather[i]);
        }
      }

      this.isForecastData = true;
    });
  }
}


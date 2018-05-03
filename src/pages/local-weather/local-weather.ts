import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { DayWeatherProvider } from '../../providers/day-weather/day-weather';
import { Geolocation } from '@ionic-native/geolocation';



/**
 * Local weather page
 * Weather for location using geolocating cordova native plugin
 * 
 * Jose Retamal
 */

@IonicPage()
@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html',
})
export class LocalWeatherPage {


  //current weather variables for read api 
  currentWeather: any = [];
  currentMain: any = [];
  currentName: any = [];
  currentWind: any = [];
  temperature;

  //geolocation variables
  lat: number = 0;
  lon: number = 0;

  //for konw when data is loaded
  isDataLoad1 = false;
  isDataLoad2 = false;
  isDataLoad = false;

  //5day foracast weather variables
  list: any; 
  forecast: any = [];

  //C or F
  tempType;

  constructor(private navCtrl: NavController, private dayWeatherProvider: DayWeatherProvider, private geolocation: Geolocation) {}

  ionViewDidLoad() {

    //optins for get geoposition
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    //get geoposition
    this.geolocation.getCurrentPosition(options).then((resp) => {

      //get lat and lon
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      //call weather API for current weather
      this.dayWeatherProvider.getWeather(this.lat, this.lon).subscribe(data => {

       //set variables
        this.currentWind = data.wind;
        this.currentWeather = data.weather;
        this.currentMain = data.main;
        this.currentName = data.name;

        this.temperature = this.currentMain.temp;
        this.isDataLoad1 = true;

      });//this.dayWeatherProvider.getWeather(this.lat, this.lon).subscribe(data

      //call APi for 5 day forecast
      this.dayWeatherProvider.getForecast5Days(this.lat, this.lon).subscribe(data => {
        
        this.list = data.list;
       

        //create a 5 day forecast, only one for day
        var d: any;

        for (var i = 0; i < this.list.length; i++) {
          d = new Date(this.list[i].dt * 1000);
          if (d.getHours() == 13) {
            this.forecast.push(this.list[i]);
          }
        }
        //set dataload to tru for show in HTML
        this.isDataLoad2 = true;

      });//this.dayWeatherProvider.getForecast5Days(this.lat, this.lon).subscribe(dat

     
    }).catch((error) => {

      console.log('Error getting location', error);

    });


  }

  //method that change tab when swip left
  swipeLeft() {

    //navigate to global 
    this.navCtrl.parent.select(1);

  }//swipeLeft

}//LocalWeatherPage

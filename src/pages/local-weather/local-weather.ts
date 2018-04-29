import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { DayWeatherProvider } from '../../providers/day-weather/day-weather'

import { Geolocation } from '@ionic-native/geolocation';

import { Platform } from 'ionic-angular';


import { Events } from 'ionic-angular';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the LocalWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html',
})
export class LocalWeatherPage {


  //current weather variables for read api 
  currentWeather: any = ["w"];
  currentMain: any = ["w"];
  currentName: any = ['w'];
  currentWind: any = ['w'];
  temperature;

  lat: number = 0;
  lon: number = 0;

  //5day foracast weather variables
  list: any = [{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],},{"dt": 1525035600,"main": {"temp": 291.29,},"weather": [{"description": "light rain","icon": "10d"}],}];


  tempType;
  constructor(private navCtrl: NavController, private navParams: NavParams, private dayWeatherProvider: DayWeatherProvider, private platform: Platform, private geolocation: Geolocation, private events: Events, private storage: Storage) {




    //listen for change on setting
    events.subscribe('setting:typeChange', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('setting change');
      this.storage.get("tempType").then((data) => {

        this.tempType = data;
        //for a bug i need to recall the event for the change to happens.. idk why...
        this.events.publish('setting:typeChange');
      }).catch((err) => {

        console.log("erros")
      });

    });

  }
  ionViewDidLoad() {
    
    //optins for get geoposition
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    //get geoposition
    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      //call weather API for current weather
      this.dayWeatherProvider.getWeather(this.lat, this.lon).subscribe(data => {

        console.log("here");
        this.currentWind = data.wind;
        this.currentWeather = data.weather;
        this.currentMain = data.main;
        this.currentName = data.name;

        this.temperature = this.currentMain.temp;

      });

      //call APi for 5 day forecast
      this.dayWeatherProvider.getForecast5Days(this.lat, this.lon).subscribe(data => {
        this.list = data.list;
        console.log("hrt", data.list[0].main.temp);
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }


  ngOnChanges() {

  }

  //method that change tab when swip left
  swipeLeft() {
    //navigate to global 
    this.navCtrl.parent.select(1);


  }
  ionViewDidEnter() {

  }
  sd() {

  }
}

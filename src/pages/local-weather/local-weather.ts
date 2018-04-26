import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { DayWeatherProvider } from '../../providers/day-weather/day-weather'

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


  dayWeather: any = ["w"];
  dayWeather1:any=["w"];
  test:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dayWeatherProvider: DayWeatherProvider) {

 
  }

  ionViewDidLoad() {
    this.dayWeatherProvider.getWeather().subscribe(data => {

      this.dayWeather = data.weather;
      this.dayWeather1 = data.main;
 
    });
    this.dayWeatherProvider.getWeather().subscribe(data => {

     
      
     
 
    });


/*
    console.log("we"+this.dayWeather[0].description);
    this.test=this.dayWeather[0].description;
    console.log(this.test);*/
  }


  ngOnChanges()
  {
    
  }
  //method that change tab when swip left
  swipeLeft() {
    //navigate to global 
    this.navCtrl.parent.select(1);

  
  }

}

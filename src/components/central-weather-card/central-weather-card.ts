import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConvertTemperatureProvider } from '../../providers/convert-temperature/convert-temperature'
import { Events } from 'ionic-angular';
/**
 * Componet for show the actual weather big in center
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'central-weather-card',
  templateUrl: 'central-weather-card.html'
})
export class CentralWeatherCardComponent {

  text: string;

  //variable for location name at top
  @Input('locationName') locationNameIn;
  locationName: string;

  //variable for description
  @Input('weatherDes') weatherDesIn;
  weatherDes: string;

  @Input('temperature') temperatureIn;
  temperature: number;

  @Input('windSpeed') windSpeedIn;
  windSpeed: number;

  @Input('humidity') humidityIn;
  humidity: number;

  @Input('icon') iconIn;
  icon: string;

  tempTypeIcon: string;

  constructor(private convertTemperatureProvider: ConvertTemperatureProvider, private events: Events) {
    console.log('Hello CentralWeatherCardComponent Component');
    this.text = 'Hello World';
    this.locationName = "ttt";
    this.temperature = 50;
    this.weatherDes = "mostlye cloudy.";
    this.windSpeed = 300;
    this.humidity = 80;
    this.icon = "assets/imgs/foreicons/";
    this.setTempTypeIcon();
    //listen for change on setting
    events.subscribe('setting:typeChange', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log("tyi");

      this.temperature = this.convertTemperatureProvider.convertTemperature(this.temperatureIn);
      this.setTempTypeIcon();
    });

  }

  ngOnChanges() {


    //assets/imgs/foreicons/02d.png
    this.locationName = this.locationNameIn;

    //convert and set temperature
    this.temperature = this.convertTemperatureProvider.convertTemperature(this.temperatureIn);

    this.weatherDes = this.weatherDesIn;
    this.windSpeed = this.windSpeedIn;
    this.humidity = this.humidityIn;
    this.icon = "assets/imgs/foreicons/" + this.iconIn + ".png";
    this.setTempTypeIcon();
  }
  setTempTypeIcon() {
    if (this.convertTemperatureProvider.getTempType() == 'C') {
      this.tempTypeIcon = "assets/imgs/foreicons/c.png"
    }else
    {
      this.tempTypeIcon = "assets/imgs/foreicons/f.png"
    }
  }
}

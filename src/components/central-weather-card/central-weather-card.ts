import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the CentralWeatherCardComponent component.
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
  locationName:string;

  //variable for description
  @Input('weatherDes') weatherDesIn;
  weatherDes:string;

  @Input('temperature') temperatureIn;
  temperature:number;

  @Input('windSpeed') windSpeedIn;
  windSpeed:number;

  @Input('humidity') humidityIn;
  humidity:number;

  constructor() {
    console.log('Hello CentralWeatherCardComponent Component');
    this.text = 'Hello World';
    this.locationName="ttt";
  this.temperature=50;
  this.weatherDes="mostlye cloudy.";
    this.windSpeed=300;
    this.humidity=80;
  }

  ngAfterViewInit()
  {
    this.locationName =this.locationNameIn;
    this.temperature = this.temperatureIn;
    this.weatherDes=this.weatherDesIn;
   this.windSpeed=this.windSpeedIn;
   this.humidity=this.humidityIn;
  }
}

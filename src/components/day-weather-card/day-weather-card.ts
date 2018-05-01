import { Component,Input, Output, EventEmitter } from '@angular/core';
import { ConvertTemperatureProvider } from '../../providers/convert-temperature/convert-temperature'
import { Events } from 'ionic-angular';

/**
 * Generated class for the DayWeatherCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'day-weather-card',
  templateUrl: 'day-weather-card.html'
})
export class DayWeatherCardComponent {

  text: string;
  timeAndDate:string;

  @Input('dateUnix') dateUnixIn;
  dateUnix:number;
  dateTitle:String;

  @Input('icon') iconIn;
  icon: string;
  tempTypeIcon: string;

  @Input('temperature') temperatureIn;
  temperature: number;

  @Input('weatherDes') weatherDesIn;
  weatherDes: string;




  constructor(private convertTemperatureProvider: ConvertTemperatureProvider, private events: Events) {
    console.log('Hello HourWeatherCardComponent Component');
    this.text = 'Hello World';
    this.timeAndDate="13:00 29/04";
    this.dateUnix=this.dateUnixIn;

     //listen for change on setting
     events.subscribe('setting:typeChange', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log("tyi");

      this.temperature = this.convertTemperatureProvider.convertTemperature(this.temperatureIn);
      
      //test
      
    });
  }

  ngOnChanges()
  {
    
    this.dateTitle= this.composeDate(this.dateUnixIn);
    this.icon = "assets/imgs/foreicons/" + this.iconIn + ".png";
    this.temperature =  this.convertTemperatureProvider.convertTemperature(this.temperatureIn);
    this.weatherDes =  this.weatherDesIn;
  }

  composeDate(dateUnixP:number):string
  {
    var finalDate = "";
    var date = new Date(dateUnixP*1000);
    var dayNum = date.getDate();
    var day = date.getDay();

    
    switch(day)
    {
      case 0:
      finalDate +="Sun";
      break;
      case 1:
      finalDate +="Mon";
      break;
       case 2:
      finalDate +="Tue";
      break;
      case 3:
      finalDate +="Wen";
      break;
      case 4:
      finalDate +="Thu";
      break;
      case 5:
      finalDate +="Fri";
      break;
      case 6:
      finalDate +="Sat";
      break;
      default:
      finalDate += "?";
      break;

      
    }
    finalDate+= " "+ dayNum;
    return finalDate;
  }
}

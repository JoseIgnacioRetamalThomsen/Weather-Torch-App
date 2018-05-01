import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConvertTemperatureProvider } from '../../providers/convert-temperature/convert-temperature'
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

 // text: string;
 // timeAndDate: string;

  //inputs 
  @Input('dateUnix') dateUnixIn;
  dateUnix: number;
  dateTitle: String;
  @Input('icon') iconIn;
  icon: string;
  tempTypeIcon: string;
  @Input('temperature') temperatureIn;
  temperature: number;
  @Input('weatherDes') weatherDesIn;
  weatherDes: string;


  constructor(private convertTemperatureProvider: ConvertTemperatureProvider, private events: Events, private storage: Storage) {

    //listen for change on setting
    events.subscribe('setting:typeChange', (dataType) => {

      //change tempearature
      this.temperature = this.convertTemperatureProvider.convertTemperatureNew(this.temperatureIn, dataType);

    });//events.subscribe('setting:typeChange', (dataType)

  }//constructor

  ngOnChanges() {

      //read temperature  type from storage then set temp and tempType icon icon
    this.storage.get("tempType").then((data) => {
      
      this.temperature = this.convertTemperatureProvider.convertTemperatureNew(this.temperatureIn, data);
    

    });//this.storage.get("tempType").then((data)

    //set other values
    this.weatherDes = this.weatherDesIn;
    this.dateTitle = this.composeDate(this.dateUnixIn);
    this.icon = "assets/imgs/foreicons/" + this.iconIn + ".png";

  }//ngOnChanges()

  //compose date from unix 
  composeDate(dateUnixP: number): string {

    var finalDate = "";
    var date = new Date(dateUnixP * 1000);
    var dayNum = date.getDate();
    var day = date.getDay();

    switch (day) {
      case 0:
        finalDate += "Sun";
        break;
      case 1:
        finalDate += "Mon";
        break;
      case 2:
        finalDate += "Tue";
        break;
      case 3:
        finalDate += "Wen";
        break;
      case 4:
        finalDate += "Thu";
        break;
      case 5:
        finalDate += "Fri";
        break;
      case 6:
        finalDate += "Sat";
        break;
      default:
        finalDate += "?";
        break;


    }
    finalDate += " " + dayNum;
    return finalDate;

  }//composeDate(dateUnixP: number)

}

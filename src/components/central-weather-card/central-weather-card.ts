import { Component, Input} from '@angular/core';
import { ConvertTemperatureProvider } from '../../providers/convert-temperature/convert-temperature'
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Central weather card, shows the weather at the front,
 * name of the city, icon, temperature, C Or F ..
 * 
 * Jose Retamal
 *  
 */

@Component({
  selector: 'central-weather-card',
  templateUrl: 'central-weather-card.html'
})

export class CentralWeatherCardComponent {

  //inputs
  @Input('locationName') locationNameIn;
  locationName: string;
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

  //"C" or "F"
  tempTypeIcon: string;

  constructor(private convertTemperatureProvider: ConvertTemperatureProvider, private events: Events, private storage: Storage) {

    //listen for change on setting
    events.subscribe('setting:typeChange', (dataType) => {

      //change tempearature
      this.temperature = this.convertTemperatureProvider.convertTemperatureNew(this.temperatureIn, dataType);

      //change icon
      if (dataType == 'C')
        this.tempTypeIcon = "assets/imgs/foreicons/c.png"
      else
        this.tempTypeIcon = "assets/imgs/foreicons/f.png"


    });// events.subscribe('setting:typeChange', (dataType)

  }//constructor

  ngOnChanges() {

    //set location name
    this.locationName = this.locationNameIn;

    //read temperature  type from storage then set temp and tempType icon icon
    this.storage.get("tempType").then((data) => {

      this.temperature = this.convertTemperatureProvider.convertTemperatureNew(this.temperatureIn, data);

      if (data == 'C')
        this.tempTypeIcon = "assets/imgs/foreicons/c.png"
      else
        this.tempTypeIcon = "assets/imgs/foreicons/f.png"


    });//this.storage.get("tempType").then((data)

    //set others
    this.weatherDes = this.weatherDesIn;
    this.windSpeed = this.windSpeedIn;
    this.humidity = this.humidityIn;
    
    //compose icon from input in card
    this.icon = "assets/imgs/foreicons/" + this.iconIn + ".png";

  }// ngOnChanges()

}//CentralWeatherCardComponent

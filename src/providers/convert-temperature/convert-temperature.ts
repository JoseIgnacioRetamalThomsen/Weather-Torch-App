import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ConvertTemperatureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConvertTemperatureProvider {

  tempType;

  toCelsius = 273.15;


  constructor(private storage: Storage) {
    //read tempType from storage
    this.storage.get("tempType")

      .then((data) => {

        this.tempType = data;

      })
      .catch((err) => { console.log("erros") });
  }

  //convert temperature from kelvin to the tempType
  convertTemperature(temp:number):number
  {
    this.storage.get("tempType")

      .then((data) => {

        this.tempType = data;

      })
      .catch((err) => { console.log("erros") });
      console.log("in prove ",this.tempType)
    if(this.tempType=="C")
    {
      return Math.round(temp -this.toCelsius);
    }else
    if(this.tempType=="F")
    {
      return Math.round((temp - this.toCelsius)*1.8 +32);
    }

  }//convertTemperature

  getTempType():string{
    this.storage.get("tempType")

      .then((data) => {

        this.tempType = data;

      })
      .catch((err) => { console.log("erros") });
    
        return  this.tempType;
      
  }
}

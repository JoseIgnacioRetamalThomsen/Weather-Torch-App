import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
 * Transfor temperature from kelvin to celcius or fahrenheit
 *
 * Jose Retamal
*/

@Injectable()
export class ConvertTemperatureProvider {

  //"C" or "k"
  tempType: string;

  //conversion rate
  toCelsius = 273.15;


  constructor(private storage: Storage) {
    //read tempType from storage
    this.storage.get("tempType").then((data) => {

      this.tempType = data;

    }).catch((err) => {

      console.log("erros");

    });

  }//constructor

  //convert temperature from kelvin to the tempType using storage
  //doesnt work well because do not syncronize well
  //not in use
  convertTemperature(temp: number): number {

    //read temp type from storage
    this.storage.get("tempType").then((data) => {

      this.tempType = data;

    }).catch((err) => {

      console.log("erros");

    });

    //tranfor from kelvi to value in the storage and return the result
    if (this.tempType == "C")
      return Math.round(temp - this.toCelsius);
    else
      if (this.tempType == "F")
        return Math.round((temp - this.toCelsius) * 1.8 + 32);


  }//convertTemperature

  //convert to temperature using input parameter tempType
  convertTemperatureNew(temp: number, tempType: string): number {

    //calculete temperature in C or F and return the value
    if (tempType == "C")
      return Math.round(temp - this.toCelsius);
    else
      if (tempType == "F")
        return Math.round((temp - this.toCelsius) * 1.8 + 32);

  }//convertTemperature

  //return tempType from storage
  getTempType(): string {

    this.storage.get("tempType").then((data) => {

      this.tempType = data;

    }).catch((err) => {

      console.log("erros");

    });

    return this.tempType;

  }//getTempType

}//ConvertTemperatureProvider

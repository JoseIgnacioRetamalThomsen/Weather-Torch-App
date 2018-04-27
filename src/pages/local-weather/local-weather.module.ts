import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalWeatherPage } from './local-weather';

import {CentralWeatherCardComponent} from'../../components/central-weather-card/central-weather-card'

@NgModule({
  declarations: [
    //removed for deploy
    //LocalWeatherPage,
   // CentralWeatherCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(LocalWeatherPage),
  ],
})
export class LocalWeatherPageModule {}

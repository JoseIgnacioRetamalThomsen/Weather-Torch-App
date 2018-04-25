import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalWeatherPage } from './local-weather';

@NgModule({
  declarations: [
    //removed for deploy
    //LocalWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalWeatherPage),
  ],
})
export class LocalWeatherPageModule {}

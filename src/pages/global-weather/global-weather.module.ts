import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalWeatherPage } from './global-weather';

@NgModule({
  declarations: [
    GlobalWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalWeatherPage),
  ],
})
export class GlobalWeatherPageModule {}

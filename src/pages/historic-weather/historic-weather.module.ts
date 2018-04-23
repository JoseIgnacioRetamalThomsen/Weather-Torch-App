import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricWeatherPage } from './historic-weather';

@NgModule({
  declarations: [
    HistoricWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricWeatherPage),
  ],
})
export class HistoricWeatherPageModule {}

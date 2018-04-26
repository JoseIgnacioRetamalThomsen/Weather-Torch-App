import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Flashlight } from '@ionic-native/flashlight';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import { LocalWeatherPage} from '../pages/local-weather/local-weather';
import { GlobalWeatherPage } from '../pages/global-weather/global-weather';
import {HistoricWeatherPage}  from '../pages/historic-weather/historic-weather';

import {CentralWeatherCardComponent} from'../components/central-weather-card/central-weather-card';
import { DayWeatherProvider } from '../providers/day-weather/day-weather';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
    HistoricWeatherPage,
    CentralWeatherCardComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
    HistoricWeatherPage,
    CentralWeatherCardComponent,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DayWeatherProvider
  ]
})
export class AppModule {}

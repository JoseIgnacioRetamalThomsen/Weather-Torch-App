import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage' 

//my pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import { LocalWeatherPage} from '../pages/local-weather/local-weather';
import { GlobalWeatherPage } from '../pages/global-weather/global-weather';

//my componets
import {CentralWeatherCardComponent} from'../components/central-weather-card/central-weather-card';
import {HourWeatherCardComponent} from '../components/hour-weather-card/hour-weather-card';
import {DayWeatherCardComponent} from '../components/day-weather-card/day-weather-card'

//my providers
import { DayWeatherProvider } from '../providers/day-weather/day-weather';
import { ConvertTemperatureProvider } from '../providers/convert-temperature/convert-temperature';

//my natives
import {HttpClientModule} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Flashlight } from '@ionic-native/flashlight';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
  
    CentralWeatherCardComponent,
    HourWeatherCardComponent,
    DayWeatherCardComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
 
    CentralWeatherCardComponent,
    HourWeatherCardComponent,
    DayWeatherCardComponent
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DayWeatherProvider,
    ConvertTemperatureProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import { LocalWeatherPage} from '../pages/local-weather/local-weather';
import { GlobalWeatherPage } from '../pages/global-weather/global-weather';
import {HistoricWeatherPage}  from '../pages/historic-weather/historic-weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
    HistoricWeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LocalWeatherPage,
    GlobalWeatherPage,
    HistoricWeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

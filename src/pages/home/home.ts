import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalWeatherPage} from '../local-weather/local-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //main title of the app
  appTittle:string = "Weather Torch";

  tab1Root = LocalWeatherPage;

  constructor(public navCtrl: NavController) {

  }


    //navigate to settings
    openSettings() {
      //load Setting Page using lazy loading
      this.navCtrl.push("SettingsPage");//, { data1int: 25 });
    }
}

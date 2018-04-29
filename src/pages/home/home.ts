import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

import { LocalWeatherPage} from '../local-weather/local-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //main title of the app
  appTittle:string = "Weather Torch";

  tab1Root = LocalWeatherPage;

  constructor(public navCtrl: NavController,private flashlight: Flashlight,private platform: Platform) {

  }


    //navigate to settings
    openSettings() {
      //load Setting Page using lazy loading
      this.navCtrl.push("SettingsPage");//, { data1int: 25 });
    }

    lightOn()
    {
     
      this.platform.ready().then(() => {
        this.flashlight.toggle();
        var check = this.flashlight.isSwitchedOn();
      
       });
      
    }
    ionViewDidEnter() {
      console.log("here");
    }
}

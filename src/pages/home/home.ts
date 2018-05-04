import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/*
 * Home page, flashlight hapens here 
 *
 * Jose Retamal
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //main title of the app
  appTittle: string = "Weather Torch";

  bulbColor: string = "";

  constructor(public navCtrl: NavController, private flashlight: Flashlight, private platform: Platform) { }



  //navigate to settings
  openSettings() {
    //load Setting Page using lazy loading
    this.navCtrl.push("SettingsPage");
  }

  toggleLight() {

    //wait for plataform to be ready for toggle the flashlight
    this.platform.ready().then(() => {

      this.flashlight.toggle();

      //if light is turn on will make the icon yellow and normal color if is off
      //please note taht this do not work well in the browser but work fine in a phone.
      if (this.flashlight.isSwitchedOn())
        this.bulbColor = "turnedOn";
      else
        this.bulbColor = "";

    });

  }//toggleLight

}//HomePage

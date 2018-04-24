import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GlobalWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global-weather',
  templateUrl: 'global-weather.html',
})
export class GlobalWeatherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalWeatherPage');
  }


  //method that change tab when swip left
  swipeLeft()
  {
    //navigate to historic 
    this.navCtrl.parent.select(2);
    console.log("swipe r");
  }

  swipeRight()
  {
    //navigate to Local
    this.navCtrl.parent.select(0);
  }
}

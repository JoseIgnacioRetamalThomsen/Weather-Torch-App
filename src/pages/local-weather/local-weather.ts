import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LocalWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html',
})
export class LocalWeatherPage {

 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalWeatherPage');
  }

//method that change tab when swip left
  swipeLeft()
  {
    //navigate to global 
    this.navCtrl.parent.select(1);
    console.log("swipe r");
  }
  
}

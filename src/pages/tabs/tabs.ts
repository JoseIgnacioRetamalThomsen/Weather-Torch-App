import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalWeatherPage} from '../local-weather/local-weather';
import {GlobalWeatherPage} from'../global-weather/global-weather';
import {HistoricWeatherPage} from '../historic-weather/historic-weather';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //set tabs
  tab1Root = LocalWeatherPage;
  tab2Root=GlobalWeatherPage;
  tab3Root=HistoricWeatherPage;


  @Input('locationName') locationNameIn;
  locationName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("here2");
  }

}

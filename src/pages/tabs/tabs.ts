import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalWeatherPage} from '../local-weather/local-weather';
import {GlobalWeatherPage} from'../global-weather/global-weather';


/**
 * Tabs page , 2 tabs one for Local wather and another for global
 *
 *  Jose Retamal
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
 
  @Input('locationName') locationNameIn;
  locationName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}//TabsPage

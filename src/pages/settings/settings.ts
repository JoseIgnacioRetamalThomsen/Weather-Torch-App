import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/**
 * Jose Retamal Setting Page
 *
 * When a seting is change will triger and event.
 * Setting are save in storage
 * Settings:
 * Temperature type(Celcius or fahrenheint), radiu button, storana name="tempType"("C"/"F").
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  //hold type of temperature "C" or "F"
  tempType;

  constructor(private navCtrl: NavController, private navParams: NavParams, private storage: Storage, private events: Events) { }
 

  radioButtonClicked() {

    //save type select to storage
    this.storage.set("tempType", this.tempType);

    //call method that triger event for change temperature conversion type
    this.changeTempTypeEvent();

  }//radioButtonClicked() 

  ionViewWillEnter() {

    //read type when view enter
    this.storage.get("tempType").then((data) => {

      this.tempType = data;

    }).catch((err) => {

      console.log("erros")

    });

  }//ionViewWillEnter() 
  
  //event when setting are change
  changeTempTypeEvent() {

    //trigged event and send temperature type (C or F ) as parameter
    this.events.publish('setting:typeChange', this.tempType);

  }//changeTempTypeEvent()

}//SettingsPage

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



  tempType;

  constructor(private navCtrl: NavController, private navParams: NavParams, private storage: Storage, private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }



  radioButtonClicked() {

    

    this.storage.set("tempType", this.tempType);
    

  }//radioButtonClicked() 

  ionViewWillEnter() {

    //read type when view enter
    this.storage.get("tempType").then((data) => {

      this.tempType = data;

    }).catch((err) => {

      console.log("erros")
    });


  }//ionViewWillEnter() 

  setStorage(st: string) {
    this.storage.set("tempType", st);
  }


  //event when setting are change
  changeTempTypeEvent() {

    this.events.publish('setting:typeChange');
  }

  save() {
    this.storage.set("tempType", this.tempType);
  }
  ionViewDidLeave() {
    this.changeTempTypeEvent();

  }
}

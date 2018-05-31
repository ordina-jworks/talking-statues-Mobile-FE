import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook,
  ) {
    fb.getLoginStatus()
      .then(data => {
        this.getUserDetail(data.authResponse.userID);
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InfoPage');
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        this.userData = res;
      })
      .catch(e => {
        console.log(e);
      });


  }

}

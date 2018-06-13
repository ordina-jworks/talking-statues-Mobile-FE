import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginGooglePage } from './login-google/login-google';
import { MenuPage } from '../menu/menu';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;
  isLoggedIn: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private facebook: Facebook,
    public menuEvent: Events,
  ) {
    facebook.getLoginStatus()
      .then(res => {
        console.log('status: ' + res.status);
        console.log('id: ' + res.authResponse.userID);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
          menuEvent.publish('user:data', res, Date.now());
        }
        else {
          this.isLoggedIn = false;
        }
      })
      .catch(error => console.log('error: ' + error));
  }

  goToFbLogin() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.navCtrl.push(MenuPage);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  goToGoogleLogin() {
    this.navCtrl.push(LoginGooglePage);
  }
}

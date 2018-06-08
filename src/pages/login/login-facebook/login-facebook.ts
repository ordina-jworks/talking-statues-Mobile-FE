import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { MenuPage } from '../../menu/menu';

/**
 * Generated class for the LoginFacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-facebook',
  templateUrl: 'login-facebook.html',
})
export class LoginFacebookPage {
  userData: any;
  isLoggedIn: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private facebook: Facebook,
  ) {
    facebook.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this,this.isLoggedIn = true;
        }
        else {
          this.isLoggedIn = false;
        }
      })
      .catch(error => console.log(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');
  }

  loginWithFB() {
    // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    //   this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
    //     .then(profile => {
    //       this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']
    //           ['data']['url'], username: profile[ 'name']};
    //     })
    // })

    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
    this.navCtrl.push(MenuPage);
  }

  getUserDetail(userid) {
    this.facebook.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.userData = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

}

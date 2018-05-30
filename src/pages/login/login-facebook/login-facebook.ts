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
  userData = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private facebook: Facebook,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');
  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
        .then(profile => {
          this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']
              ['data']['url'], username: profile[ 'name']};
        })
    })
    this.navCtrl.push(MenuPage);
  }

}

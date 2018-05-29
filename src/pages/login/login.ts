import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginGooglePage } from './login-google/login-google';
import { LoginFacebookPage } from './login-facebook/login-facebook';
import { MonumentService } from '../../providers/monument.service';

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


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _monumentService : MonumentService,
  ) {
    console.log('data' ,this._monumentService.getMonuments());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LoginWithGoogle() {
    this.navCtrl.push(LoginGooglePage);
  }

  LoginWithFacebook() {
    this.navCtrl.push(LoginFacebookPage);
  }

}

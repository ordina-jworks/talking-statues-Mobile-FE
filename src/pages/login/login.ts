import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginService } from '../../services/login.service';

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
    private _loginService: LoginService,
  ) {
    this._loginService.checkLoggedUserID().subscribe(
      res => {
        this.userData = res;
        console.log('Logged in UserID: ',this.userData);

        if (this.userData) {
          this.navCtrl.push(MenuPage);
        }
      }
    );
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Facebook } from '@ionic-native/facebook';
import { LoginService } from '../../services/login.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
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

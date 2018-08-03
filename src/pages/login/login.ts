import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginService } from '../../services/login.service';
import { TranslationService } from '../../components/shared/translation.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    public translate: TranslationService,
    private _loginService: LoginService,
  ) {
    this.translate.initTranslate();
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

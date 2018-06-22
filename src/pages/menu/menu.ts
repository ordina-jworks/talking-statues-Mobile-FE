import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';
import { LoginPage } from '../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: Facebook,
    public nativeStorage: NativeStorage,
  ) {
    this.data = navParams.get('payload');

  }

  planningRoutes() {
    this.navCtrl.push(RouteplannerPage);
  }

  myRoutes() {
    this.navCtrl.push(MyRoutePage);
  }

  info() {
    this.navCtrl.push(InfoPage);
  }

  chat() {
    this.navCtrl.push(ChatPage);
  }

  logout() {

    this.navCtrl.push(LoginPage);

  }
}

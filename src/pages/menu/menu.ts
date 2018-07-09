import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { ChatPage } from './chat/chat';
import { LoginPage } from '../login/login';
import { ProfilePage } from './profile/profile';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.data = navParams.get('payload');

  }

  planningRoutes() {
    this.navCtrl.push(RouteplannerPage);
  }

  myRoutes() {
    this.navCtrl.push(MyRoutePage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

  chat() {
    this.navCtrl.push(ChatPage);
  }

  logout() {
    this.navCtrl.push(LoginPage);

  }
}

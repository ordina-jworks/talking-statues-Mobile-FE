import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
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

}

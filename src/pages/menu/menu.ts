import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';
import { LoginPage } from '../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: Facebook,
    public nativeStorage: NativeStorage,
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

  logout() {
    var nav = this.navCtrl;
    let env = this;
    this.fb.logout()
      .then(function(response) {
        //user logged out so we will remove him from the NativeStorage
        env.nativeStorage.remove('user');
        nav.push(LoginPage);
      }, function(error){
        console.log(error);
      });
  }

}

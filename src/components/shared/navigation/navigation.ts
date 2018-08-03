import { Component, Input } from '@angular/core';
import { RouteplannerPage } from '../../../pages/menu/routeplanner/routeplanner';
import { ChatPage } from '../../../pages/menu/chat/chat';
import { ProfilePage } from '../../../pages/menu/profile/profile';
import { LoginPage } from '../../../pages/login/login';
import { MyRoutePage } from '../../../pages/menu/my-route/my-route';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {
  @Input() backButtonText: string;

  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  planningRoutes() {
    this.navCtrl.push(RouteplannerPage, this.backButtonText);
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

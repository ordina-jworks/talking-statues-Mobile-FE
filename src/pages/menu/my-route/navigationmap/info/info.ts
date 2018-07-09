import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Monument } from '../../../../../app/models/monument';
import { ProfilePage } from '../../../profile/profile';
import { ChatPage } from '../../../chat/chat';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  monumentData: Monument[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.monumentData = navParams.get('infoData');
  }

  public backToRoute(): void {
    this.viewCtrl.dismiss();
  }

  public goToProfile(): void {
    this.navCtrl.push(ProfilePage);
  }

  public goToChat(): void {
    this.navCtrl.push(ChatPage);
  }
}

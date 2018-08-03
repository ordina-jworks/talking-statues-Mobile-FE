import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '../../../../../node_modules/@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {
  messages = [];
  nickname: string;
  message = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {
    this.nickname = navParams.get('payload');
  }

  ionViewDidLoad() {
  }

}

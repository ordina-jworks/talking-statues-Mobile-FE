import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  ) {
    this.nickname = navParams.get('payload');
  }

  ionViewDidLoad() {
  }

}

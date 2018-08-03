import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatroomPage } from './chatroom/chatroom';
import { TranslateService } from '../../../../node_modules/@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {
  }

  ionViewDidLoad() {
  }

  joinChat(data) {
    this.navCtrl.push(ChatroomPage, {payload: data});
  }

}

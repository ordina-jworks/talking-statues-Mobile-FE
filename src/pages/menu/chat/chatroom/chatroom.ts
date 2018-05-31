import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    // console.log('ionViewDidLoad ChatroomPage');
  }

}

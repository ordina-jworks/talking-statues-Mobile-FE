import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomPage } from './chatroom';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChatroomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatroomPage),
    TranslateModule.forChild()
  ],
})
export class ChatroomPageModule {}


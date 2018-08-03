import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { ChatroomPageModule } from './chatroom/chatroom.module';
import { ChatroomPage } from './chatroom/chatroom';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChatPage,
    ChatroomPage,

  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    TranslateModule.forChild(),
    ChatroomPageModule
  ],
})
export class ChatPageModule {}

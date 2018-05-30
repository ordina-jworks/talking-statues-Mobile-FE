import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { ChatroomPageModule } from './chatroom/chatroom.module';
import { ChatroomPage } from './chatroom/chatroom';

@NgModule({
  declarations: [
    ChatPage,
    ChatroomPage,

  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    ChatroomPageModule,
  ],
})
export class ChatPageModule {}

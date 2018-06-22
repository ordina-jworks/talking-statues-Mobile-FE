import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { ChatPage } from './chat/chat';
import { InfluencerPage } from './routeplanner/influencer/influencer';
import { ChoisePage } from './routeplanner/choise/choise';
import { ChatroomPage } from './chat/chatroom/chatroom';
import { SwingModule } from 'angular2-swing';
import { InfoPage } from './my-route/navigationmap/info/info';
import { ProfilePage } from './profile/profile';

@NgModule({
  declarations: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
    ChatroomPage,
    ProfilePage,
  ],
  entryComponents: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
    ChatroomPage,
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    SwingModule,
  ],
})
export class MenuPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';
import { InfluencerPage } from './routeplanner/influencer/influencer';
import { ChoisePage } from './routeplanner/choise/choise';
import { ChatroomPage } from './chat/chatroom/chatroom';
import { SwingModule } from 'angular2-swing';
import { RoutesService } from '../../services/routes.service';



@NgModule({
  declarations: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
    ChatroomPage,
  ],
  entryComponents: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
    ChatroomPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    SwingModule,
  ],
})
export class MenuPageModule {}

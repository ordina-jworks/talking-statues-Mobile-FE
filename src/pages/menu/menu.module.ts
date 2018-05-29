import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';
import { InfluencerPage } from './routeplanner/influencer/influencer';
import { ChoisePage } from './routeplanner/choise/choise';



@NgModule({
  declarations: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
  ],
  entryComponents: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
    InfluencerPage,
    ChoisePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}

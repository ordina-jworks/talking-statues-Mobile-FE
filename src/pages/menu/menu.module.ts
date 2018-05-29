import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { RouteplannerPage } from './routeplanner/routeplanner';
import { MyRoutePage } from './my-route/my-route';
import { InfoPage } from './info/info';
import { ChatPage } from './chat/chat';



@NgModule({
  declarations: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
  ],
  entryComponents: [
    RouteplannerPage,
    MyRoutePage,
    InfoPage,
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}

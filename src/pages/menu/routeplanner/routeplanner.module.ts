import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner';
import { ChoisePage } from './choise/choise';
import { InfluencerPage } from './influencer/influencer';
import { ChoisePageModule } from './choise/choise.module';
import { InfluencerPageModule } from './influencer/influencer.module';

@NgModule({
  declarations: [

  ],
  entryComponents: [

  ],
  imports: [
    IonicPageModule.forChild(RouteplannerPage),
  ],
})
export class RouteplannerPageModule {}

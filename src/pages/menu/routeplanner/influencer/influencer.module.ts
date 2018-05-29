import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerPage } from './influencer';

@NgModule({
  declarations: [
    InfluencerPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerPage),
  ],
})
export class InfluencerPageModule {}

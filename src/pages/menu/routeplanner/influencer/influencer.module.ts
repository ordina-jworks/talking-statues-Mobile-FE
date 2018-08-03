import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerPage } from './influencer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InfluencerPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerPage),
    TranslateModule.forChild()
  ],
})
export class InfluencerPageModule {}

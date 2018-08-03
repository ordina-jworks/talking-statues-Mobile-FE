import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InfoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
    TranslateModule.forChild()
  ],
})
export class InfoPageModule {}


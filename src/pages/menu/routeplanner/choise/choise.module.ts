import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoisePage } from './choise';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChoisePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoisePage),
    TranslateModule.forChild()
  ],
})
export class ChoisePageModule {}


import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoisePage } from './choise';
import { SwingModule } from 'angular2-swing';


@NgModule({
  declarations: [
    ChoisePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoisePage),
    SwingModule,
  ],
})
export class ChoisePageModule {}

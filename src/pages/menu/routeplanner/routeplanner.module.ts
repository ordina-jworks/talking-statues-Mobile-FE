import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner';

@NgModule({
  declarations: [
    RouteplannerPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteplannerPage),
  ],
})
export class RouteplannerPageModule {}

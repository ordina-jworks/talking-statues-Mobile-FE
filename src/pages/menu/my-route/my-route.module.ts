import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRoutePage } from './my-route';

@NgModule({
  declarations: [
    MyRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(MyRoutePage),
  ],
})
export class MyRoutePageModule {}

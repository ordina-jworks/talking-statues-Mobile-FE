import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRoutePage } from './my-route';
import { NavigationmapPage } from './navigationmap/navigationmap';
import { RoutesService } from '../../../services/routes.service';

@NgModule({
  declarations: [
    MyRoutePage,
    NavigationmapPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRoutePage),
  ],
  providers: [
    RoutesService,
  ]
})
export class MyRoutePageModule {}

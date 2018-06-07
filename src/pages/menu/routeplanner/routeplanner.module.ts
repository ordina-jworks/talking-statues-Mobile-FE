import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner';
import { RoutesService } from '../../../services/routes.service';
import { NavigationmapPage } from '../my-route/navigationmap/navigationmap';

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(RouteplannerPage),
  ],
  providers: [
    RoutesService,
  ]
})
export class RouteplannerPageModule {}

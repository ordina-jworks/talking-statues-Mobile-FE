import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteplannerPage } from './routeplanner';
import { RoutesService } from '../../../services/routes.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '../../../../node_modules/@ngx-translate/http-loader';

export function createTranlateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/menu/', '.json');
}

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(RouteplannerPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranlateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    RoutesService,
  ]
})
export class RouteplannerPageModule {}


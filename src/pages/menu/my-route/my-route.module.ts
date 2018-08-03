import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRoutePage } from './my-route';
import { NavigationmapPage } from './navigationmap/navigationmap';
import { RoutesService } from '../../../services/routes.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyRoutePage,
    NavigationmapPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRoutePage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranlateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [
    RoutesService,
  ]
})
export class MyRoutePageModule {}

export function createTranlateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/menu/', '.json');
}

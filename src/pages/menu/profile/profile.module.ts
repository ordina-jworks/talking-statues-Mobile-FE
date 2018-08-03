import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranlateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
})
export class ProfilePageModule {}

export function createTranlateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/menu/', '.json');
}

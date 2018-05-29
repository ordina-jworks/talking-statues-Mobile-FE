import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesLoginFacebookPage } from './login-facebook';

@NgModule({
  declarations: [
    PagesLoginFacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesLoginFacebookPage),
  ],
})
export class PagesLoginFacebookPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginFacebookPage } from './login-facebook/login-facebook';
import { LoginGooglePage } from './login-google/login-google';


@NgModule({
  declarations: [
    LoginGooglePage,
    LoginFacebookPage,
  ],
  entryComponents: [
    LoginGooglePage,
    LoginFacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}

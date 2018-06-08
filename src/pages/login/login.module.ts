import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginFacebookPage } from './login-facebook/login-facebook';
import { LoginGooglePage } from './login-google/login-google';
import { Facebook} from '@ionic-native/facebook';


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
  providers: [
    Facebook,
  ]
})
export class LoginPageModule {}

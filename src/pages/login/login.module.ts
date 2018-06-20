import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Facebook} from '@ionic-native/facebook';



@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    Facebook,
  ]
})
export class LoginPageModule {}

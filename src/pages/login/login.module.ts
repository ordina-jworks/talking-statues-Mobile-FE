import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './login';



@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  providers: [
  ]
})
export class LoginPageModule {}

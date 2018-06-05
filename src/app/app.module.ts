import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MenuPage} from '../pages/menu/menu';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http';
import { MonumentService } from '../services/monument.service';
import { RoutesService } from '../services/routes.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    MenuPageModule,
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
  ],
  providers: [
    MonumentService,
    RoutesService,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
  ]
})
export class AppModule {}

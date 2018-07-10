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

import { MonumentService } from '../services/monument.service';
import { RoutesService } from '../services/routes.service';
import { IonicStorageModule } from '@ionic/storage';
import { NavigationmapPage } from '../pages/menu/my-route/navigationmap/navigationmap';
import { Geolocation } from '@ionic-native/geolocation';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { NavigationComponent } from '../components/shared/navigation/navigation';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    NavigationmapPage,
    NavigationComponent
  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: MenuPage, name: 'Menu', segment: 'menu' }
        ]
    }),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    MenuPageModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    NavigationmapPage,
    NavigationComponent
  ],
  providers: [
    MonumentService,
    RoutesService,
    LoginService,
    NativeStorage,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

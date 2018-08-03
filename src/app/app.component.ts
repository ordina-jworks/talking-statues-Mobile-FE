import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    private _translate: TranslateService
  ) {
    platform.ready().then(() => {
    });
    this.initTranslate();
  }

  initTranslate() {
      // Set the default language for translation strings, and the current language.
      this._translate.addLangs(['de', 'en', 'es', 'fr', 'nl']);
      this._translate.setDefaultLang('en');
      const browserLang = this._translate.getBrowserLang();
      this._translate.use(browserLang.match(/de|en|es|fr|nl/) ? browserLang : 'en');
  }

}


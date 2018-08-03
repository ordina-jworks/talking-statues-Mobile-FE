import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  data: any;
  // content = '';
  // user_language = 'NL';

  // lang: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {
    // this.translation.initTranslate();
    // this.translation.lang.subscribe(lang => this.translate.use(lang));
    //   this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //     console.log(`LangChangeEvent: ${JSON.stringify(event)}`);
    //     this.translate.use(event.lang);
    //     this.lang = this.translate.currentLang;
    //   });
    // this.getUserLanguage();
    this.data = navParams.get('payload');
  }

  public printValue(value) {
    console.log(value);
  }

  // public changeLanguage(language) {
  //   console.log(language);
  //   this.translate.use(language);
  // }

  // getUserLanguage() {
  //   let language = this.user_language;
  //   switch (language) {
  //     case 'NL': {
  //       this.content = ' De beste tips voor al je trips';
  //       break;
  //     }
  //     case 'GB': {
  //       this.content = ' The best tips for all your trips on';
  //       break;
  //     }
  //     case 'DE': {
  //       this.content = ' Die besten Tipps für alle Ihre Reisen';
  //       break;
  //     }
  //     case 'FR': {
  //       this.content = ' Les meilleurs conseils pour tous vos voyages';
  //       break;
  //     }
  //     case 'ES': {
  //       this.content = ' Los mejores consejos para todos tus viajes';
  //       break;
  //     }
  //     default: {
  //       this.content = ' De beste tips voor al je trips';
  //       break;
  //     }

  //   }
  // }

}

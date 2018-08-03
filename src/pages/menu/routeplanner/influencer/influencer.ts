import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the InfluencerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influencer',
  templateUrl: 'influencer.html',
})
export class InfluencerPage {

  lang: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public translate: TranslateService,
    ) {
      // this.translate.initTranslate();
      // this.translate.lang.subscribe(lang => this._translate.use(lang));
      // this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      //   console.log(`LangChangeEvent: ${JSON.stringify(event)}`);
      //   this._translate.use(event.lang);
      //   this.lang = this._translate.currentLang;
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerPage');
  }

}

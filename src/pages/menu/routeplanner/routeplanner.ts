import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChoisePage } from './choise/choise';
import { InfluencerPage } from './influencer/influencer';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslationService } from '../../../components/shared/translation.service';

@IonicPage()
@Component({
  selector: 'page-routeplanner',
  templateUrl: 'routeplanner.html',
})
export class RouteplannerPage {

  user_language = 'FR';
  title = '';
  backButtonText = '';
  keuzes = '';
  influencer = '';

  lang: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public translate: TranslateService,
    private _translate: TranslationService
  ) {
    // this.translate.initTranslate();
    this._translate.lang.subscribe(lang => this.translate.use(lang));
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(`LangChangeEvent: ${JSON.stringify(event)}`);
      this.translate.use(event.lang);
      this.lang = this.translate.currentLang;
    });
    // this.getUserLanguage();
  }

  getUserLanguage() {
    let language = this.user_language;
    switch (language) {
      case 'NL': {
        this.title = 'Routeplanner';
        this.backButtonText = 'Terug';
        this.keuzes = 'Keuzes';
        this.influencer = 'Influencers';
        break;
      }
      case 'GB': {
        this.title = 'Route planner';
        this.backButtonText = 'Back';
        this.keuzes = 'Choices';
        this.influencer = 'Influencers';
        break;
      }
      case 'DE': {
        this.title = 'Routenplaner';
        this.backButtonText = 'Zurück';
        this.keuzes = 'Möglichkeiten';
        this.influencer = 'Influencers';
        break;
      }
      case 'FR': {
        this.title = 'Planificateur d\'itinéraires';
        this.backButtonText = 'Retour';
        this.keuzes = 'Choix';
        this.influencer = 'Influenceurs';
        break;
      }
      case 'ES': {
        this.title = 'Planificador de ruta';
        this.backButtonText = 'Volver';
        this.keuzes = 'Elecciones';
        this.influencer = 'Influencers';
        break;
      }
      default: {
        this.title = 'Routeplanner';
        this.backButtonText = 'Terug';
        this.keuzes = 'Keuzes';
        this.influencer = 'Influencers';
        break;
      }

    }
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText(this.backButtonText);
  }

  choices() {
    this.navCtrl.push(ChoisePage);
  }

  influencers() {
    this.navCtrl.push(InfluencerPage);
  }

}

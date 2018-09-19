import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChoisePage } from './choise/choise';
import { InfluencerPage } from './influencer/influencer';

@IonicPage()
@Component({
  selector: 'page-routeplanner',
  templateUrl: 'routeplanner.html',
})
export class RouteplannerPage {

  user_language = 'GB';
  title = '';
  backButtonText = '';
  keuzes = '';
  influencer = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.getUserLanguage();
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
        this.title = 'Route planner';
        this.backButtonText = 'Back';
        this.keuzes = 'Choices';
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

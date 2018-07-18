import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  data: any;
  content = '';
  user_language = 'NL';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.getUserLanguage();
    this.data = navParams.get('payload');

  }

  getUserLanguage() {
    let language = this.user_language;
    switch (language) {
      case 'NL': {
        this.content = ' De beste tips voor al je trips';
        break;
      }
      case 'GB': {
        this.content = ' The best tips for all your trips on';
        break;
      }
      case 'DE': {
        this.content = ' Die besten Tipps für alle Ihre Reisen';
        break;
      }
      case 'FR': {
        this.content = ' Les meilleurs conseils pour tous vos voyages';
        break;
      }
      case 'ES': {
        this.content = ' Los mejores consejos para todos tus viajes';
        break;
      }
      default: {
        this.content = ' De beste tips voor al je trips';
        break;
      }

    }
  }

}

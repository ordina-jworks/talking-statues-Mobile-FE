import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoisePage } from './choise/choise';
import { InfluencerPage } from './influencer/influencer';

@IonicPage()
@Component({
  selector: 'page-routeplanner',
  templateUrl: 'routeplanner.html',
})
export class RouteplannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  choices() {
    this.navCtrl.push(ChoisePage);
  }

  influencers() {
    this.navCtrl.push(InfluencerPage);
  }

}

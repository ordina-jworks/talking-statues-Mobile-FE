import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChoisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choise',
  templateUrl: 'choise.html',
})
export class ChoisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoisePage');
  }

  activities = [
    {
      id: 1,
      name: 'name 1',
      description: 'description 1',
      image: 'image url 1'
    },
    {
      id: 2,
      name: 'name 2',
      description: 'description 2',
      image: 'image url 2'
    },{
      id: 3,
      name: 'name 3',
      description: 'description 3',
      image: 'image url 3'
    },
  ];
}

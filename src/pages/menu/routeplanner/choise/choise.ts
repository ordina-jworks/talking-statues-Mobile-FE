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
  activitylist: any[] =[
    {
      id: 1,
      name: 'Sunset',
      description: 'description 1',
      image: 'Sunset_2007-1.jpg'
    },
    {
      id: 2,
      name: 'Serene Sunset',
      description: 'description 2',
      image: 'serene-sunset-robert-bynum.jpg'
    },{
      id: 3,
      name: 'Sunset and Wave',
      description: 'description 3',
      image: 'sunset+wave.jpg'
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoisePage');
  }


}

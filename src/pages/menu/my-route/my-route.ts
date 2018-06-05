import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesService } from '../../../services/routes.service';
import { NavigationmapPage } from './navigationmap/navigationmap';
import { Language, Monument } from '../../../app/models/monument';

/**
 * Generated class for the MyRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-route',
  templateUrl: 'my-route.html',
})
export class MyRoutePage {
  routes: Monument[] = [];
  completedRoutes: Monument[] = [
    {
      id:'hdfhdfhgxffrdrbdrfghdsfsfsf',
      information:[{
        name: 'Antoon Van Dyck',
        language:Language.NL,
        description: 'mens op een voetstuk',
        question:[],
      }],

      area:"meir",
      imageRef: 'https://images.standbeelden.be/600x0/1363/Antoon%20Van%20Dyck.jpg',
      latitude: 51.218,
      longitude: 4.413
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _routesService: RoutesService,
    public myRouteEvent: Events,
    ) {
    // this.myRouteEvent.subscribe('list:like', (data) => {
    //   console.log('Receiving data: ',  data);
    // });
    this.routes = navParams.get('data');
  }

  onLoadNewRoute() {
    this.navCtrl.push(NavigationmapPage);
  }


}

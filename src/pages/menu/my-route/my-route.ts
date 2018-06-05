import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesService } from '../../../services/routes.service';
import { NavigationmapPage } from './navigationmap/navigationmap';
import { Monument } from '../../../app/models/monument';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _routesService: RoutesService,
    public myRouteEvent: Events,
    ) {
    myRouteEvent.subscribe('list:like', (data) => {
      console.log('Receiving data: ',  data);
    });

    this.routes = navParams.get('data');
    console.log(this.routes);
  }

  ionViewDidLoad() {
    this._routesService.getRoutes()
      .then((routes) => this.routes = routes);
  }

  onLoadNewRoute() {
    this.navCtrl.push(NavigationmapPage);
  }


}

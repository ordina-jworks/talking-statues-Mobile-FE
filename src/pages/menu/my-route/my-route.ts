import { Component } from '@angular/core';
import { Events, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { RoutesService } from '../../../services/routes.service';
import { NavigationmapPage } from './navigationmap/navigationmap';
import { Language, Monument } from '../../../app/models/monument';

@IonicPage()
@Component({
  selector: 'page-my-route',
  templateUrl: 'my-route.html',
})
export class MyRoutePage {
  receivedRoutes: Monument[] = [];
  routes: Monument[] = [];
  dateVariable: string;

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
    private _modalCtrl: ModalController,
    ) {
    this.receivedRoutes = navParams.get('data');
    this.routes = this.receivedRoutes;
    console.log(this.routes);
    if (this.receivedRoutes) {
      this.dateVariable = new Date().toDateString();
    }

  }

  ionViewWillEnter() {
    // this.onAddRoute(this.receivedRoutes);
    this._routesService.getRoutes()
      .then((routes) => {
        this.routes = routes;
      })
  }

  onAddRoute(data: Monument[]) {
    this._routesService.addRoutes(data);
    this.navCtrl.pop();
  }

  onLoadNewRoute() {
    this.navCtrl.push(NavigationmapPage);
  }

  onOpenRoute() {
    // create the modal, but present will also show the modal.
    this._modalCtrl.create(NavigationmapPage, {
      myRouteData: this.routes
    }).present();
  }


}

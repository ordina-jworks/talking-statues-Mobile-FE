import { Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Monument } from '../app/models/monument';

@Injectable()
export class RoutesService {
  private routeArray: Monument[] = [];

  constructor(
    private _storage: Storage,
  ) {}

  addRoutes(route) {
    console.log(route);
    this.routeArray.push(route);
    this._storage.set('routes', this.routeArray);
  }

  getRoutes() {
    return this._storage.get('routes')
      .then((routes) => {
        this.routeArray = routes == null? [] : routes;
        return this.routeArray.slice();
      });
  }
}

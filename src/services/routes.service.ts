import { Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Monument } from '../app/models/monument';

@Injectable()
export class RoutesService {
  private routes: Monument[] = [];

  constructor(
    private _storage: Storage,
  ) {}

  addRoute(route: Monument) {
    this.routes.push(route);
    this._storage.set('routes', this.routes);
  }

  getRoutes() {
    return this._storage.get('routes')
      .then((routes) => {
        this.routes = routes == null? [] : routes;
        return this.routes.slice();
      });
  }
}

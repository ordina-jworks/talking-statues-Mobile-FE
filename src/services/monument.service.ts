import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { QueryMonuments } from '../app/models/query';
import { Route } from '../app/models/route';


@Injectable()
export class MonumentService {
  data: QueryMonuments[] = [];


  constructor(
    private _http: HttpClient,
  ) {
    this.data = null;
  }

  getSwipeMonuments(): Observable<QueryMonuments[]> {
    let endpoint = 'http://localhost:9000/monuments/selection?area=Sint-Andries&lang=NL';
    return this._http.get<QueryMonuments[]>(endpoint, { withCredentials: true }).pipe(
      map(res => this.data = res),
      tap(res => console.log(res))
    );
  };

  sendLikedMonumentIds(likedIds): Observable<Route> {
    let endpoint = `http://localhost:9000/routes`;

    likedIds.locations = likedIds.locations.map(id => id.id);
    return this._http.post<Route>(endpoint, likedIds, { withCredentials: true });
  }


}

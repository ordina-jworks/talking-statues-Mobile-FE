import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  data;

  constructor(
    private _http: HttpClient,
  ) {

  }
  checkLoggedUserID() :Observable<{id:string}>{
    let endpoint = 'http://localhost:9000/auth/user-info';
    return this._http.get<{id:string}>(endpoint, { withCredentials: true });
  };
}

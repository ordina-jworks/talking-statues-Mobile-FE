import { Injectable } from '@angular/core';
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
    let endpoint = 'http://localhost:8080/auth/user';
    return this._http.get<{id:string}>(endpoint, { withCredentials: true });
  };
}

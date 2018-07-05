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
<<<<<<< Updated upstream
    let endpoint = 'http://localhost:9000/auth/user';
=======
    let endpoint = 'http://localhost:8080/auth/user-info';
>>>>>>> Stashed changes
    return this._http.get<{id:string}>(endpoint, { withCredentials: true });
  };
}

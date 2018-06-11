import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MonumentService {
  data: any;


  constructor(
    private _http: HttpClient,
  ) {
    this.data = null;
  }

  getMonuments() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      let endpoint = 'localhost:8080/NL/monuments';
      let header = new HttpHeaders({'Accept': 'application/vnd.ordina.v1.0+json'})

      this._http.get(`${endpoint}/5`, {headers: header});
    })
  }
}

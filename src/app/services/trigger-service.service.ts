import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriggerServiceService {

  private _url = 'http://localhost/sapatainteligenteback/gatilhos'

  constructor(private _http: HttpClient) { }


  insert() {

    return this._http.post(this._url, {
      'gatilho': 'kl'
    });
  }

  list() {

    return this._http.get(this._url);
  }
}

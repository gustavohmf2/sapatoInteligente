import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriggerServiceService {

  private _url = 'http://localhost/gatilho'

  constructor(private _http: HttpClient) { }


  insert(gatilho) {

    let gat = {
      "nome": gatilho.nome,
      "descricao":gatilho.descricao,
      "cliente": gatilho.cliente
    }

    if(gatilho.tipo == 1){
      return this._http.post(this._url+'/peso?idSapato='+ gatilho.idSapato, {
        gat
      });
    }else if(gatilho.tipo == 2){
      return this._http.post(this._url+'/pressao?idSapato='+ gatilho.idSapato, {
        gat
      });
    }else {
      return this._http.post(this._url+'/distancia?idSapato='+ gatilho.idSapato, {
        gat
      });
    }

    
  }

  list() {

    return this._http.get(this._url);
  }
}

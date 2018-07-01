import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private _url = 'http://localhost:8081/usuario';
  
  constructor(private _http: HttpClient) { }

  insert(paciente) {

    console.log(paciente);
    return this._http.post(this._url+"/medico?idMedico=1", 
      paciente
    );
   
  }

  listPaciente() {

    return this._http.get<Cliente[]>(this._url+"/paciente/medico?idMedico=1");
  }

}

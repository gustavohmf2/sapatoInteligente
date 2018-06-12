import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.css']
})
export class ClientManagerComponent implements OnInit {

  private _clientes:Cliente[];



  constructor() { 

    this._clientes = [
      {
        nome: 'Geraldo',
        dataNascimento: new Date('1990-04-12'),
        doenca: ['dsds'],
        idSapato: 'id-00000000001', 
        g1:null,
        g2:null,
        g3:null,
      },
      {
        nome: 'Maria',
        dataNascimento: new Date('1950-04-20'),
        doenca: ['dsds'],
        idSapato: 'id-0000000002', 
        g1:null,
        g2:null,
        g3:null,
      },
      {
        nome: 'Geraldo',
        dataNascimento: new Date('1984-05-21'),
        doenca: ['dsds'],
        idSapato: 'id-0000000003', 
        g1:null,
        g2:null,
        g3:null,
      }
    ];
  }

  ngOnInit() {
  }

  get clientes() {
    return this._clientes;
  }
}

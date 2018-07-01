import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientServiceService } from '../services/client-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.css']
})
export class ClientManagerComponent implements OnInit {

  private _clientes:Cliente[];



  constructor(private clienteService: ClientServiceService,
    private router: Router) { 

    this.clienteService.listPaciente().subscribe(
      (clientes) => {
        this._clientes = clientes;
      },
      () => console.log("Faill")
    );

  }

  editarPaciente(cliente:Cliente) {

    this.router.navigate(['novoGatilho',cliente]);

  }


  ngOnInit() {
  }

  get clientes() {
    console.log(this._clientes);
    return this._clientes;
  }
}

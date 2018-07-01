import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientServiceService } from '../services/client-service.service';
import { ActivatedRoute, Params } from '@angular/router'; 


@Component({
  selector: 'app-trigger-add',
  templateUrl: './trigger-add.component.html',
  styleUrls: ['./trigger-add.component.css']
})
export class TriggerAddComponent implements OnInit {


  public peso:boolean;
  public percurso:boolean;
  public pressao:boolean;

  private _clientes:Cliente[];
  private _cliente:Cliente;

  gatilho = {
    "idSapato": String,
    "nome": String,
    "descricao": String,
    "status": Boolean,
    "dataIncio": Date,
    "dataFim": Date,
    "tipo": String,
    "pesoMax": Number,
    "tempo": Number,
    "distMax":Number,
    "distMin":Number,
    "e1":Number,
    "e2":Number,
    "e3":Number,
    "e4":Number,
    "e5":Number,
    "e6":Number,
    "d1":Number,
    "d2":Number,
    "d3":Number,
    "d4":Number,
    "d5":Number,
    "d6":Number
  }

  constructor(private clienteService: ClientServiceService,
    private route: ActivatedRoute) { 

      this.route.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this._cliente = params['cliente'] || null;
      });
      

      console.log(this._cliente);
    this.peso = false;
    this.percurso = false;
    this.pressao = false

    this.clienteService.listPaciente().subscribe(
      (data) => {
        console.log(data.data);
        this._clientes = data.data;
      },
      () => console.log("Faill")
    );
  }

  cadastrar() {
    
    this.clienteService.insert(
        {
          
        }
    ).subscribe();

  }

  changeOption(option) {

    console.log(option);
    this.clean();
    if(option == 1){
      this.peso = true;
    }else if(option == 2) {
      this.pressao = true;
    }else {
      this.percurso = true;
    }
  }

  clean() {
    this.peso = false;
    this.percurso = false;
    this.pressao = false;
  }

  ngOnInit() {
  }

  
  get clientes() {
    return this._clientes;
  }

  get cliente() {
    return this.cliente;
  }
}

import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClientServiceService } from '../services/client-service.service';


@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  constructor(private clienteService: ClientServiceService) { }

  public mensagem:string;
  public datepipe: DatePipe
  array:Array<string>;

  ngOnInit() {
  }

  cadastrar(myForm: NgForm) {

    let paciente = new Cliente();

    console.log(myForm.value);

    paciente.nome = myForm.value.nome;
    paciente.dataNascimento = myForm.value.nascimento;
    paciente.idSapato = myForm.value.idSapato;

    let dn = myForm.value.nascimento.replace("/","-").replace("/","-");

    let date =new Date(myForm.value.nascimento);
     
    console.log(date.toLocaleDateString);
    console.log(date.toDateString);
    console.log(date.toLocaleTimeString);

    this.clienteService.insert({
      "nome": myForm.value.nome,
      "dataNascimento": date
    })
    .subscribe(() => {
      this.mensagem = "Cadastro realizado!";
      console.log(this.mensagem);
    },
    () => {
      this.mensagem = "Não foi possível realizar o cadastro!";
      console.log(this.mensagem);
    });

    
  }

  
}

  

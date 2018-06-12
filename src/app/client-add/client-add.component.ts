import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cadastrar(myForm: NgForm) {

    console.log(myForm.value);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trigger-add',
  templateUrl: './trigger-add.component.html',
  styleUrls: ['./trigger-add.component.css']
})
export class TriggerAddComponent implements OnInit {


  public peso:boolean;
  public percurso:boolean;
  public pressao:boolean;

  constructor() { 
    this.peso = false;
    this.percurso = false;
    this.pressao = false
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

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  conta = "";
  resultado: number;


  constructor() {}

  addNumero(numero){

    this.conta += numero;

  }

  limpar(){

    this.conta = null;
    this.resultado = null;

  }

}

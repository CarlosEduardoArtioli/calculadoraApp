import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public numero1: any;
  public numero2: any;
  public resultado: any;

  constructor() {}

  public limpar(){

    this.numero1 = "";
    this.numero2 = "";
    this.resultado = "";

  }

  public somar(){

    this.resultado = this.numero1 + this.numero2

  }

  public subtrair(){

    this.resultado = this.numero1 - this.numero2
    
  }

  public dividir(){

    this.resultado = this.numero1 / this.numero2
    
  }

  public multiplicar(){

    this.resultado = this.numero1 * this.numero2
    
  }

}

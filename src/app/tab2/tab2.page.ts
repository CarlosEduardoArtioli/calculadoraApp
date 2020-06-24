import { Component } from '@angular/core';
// Importação da Lib 'mathjs' para fazer cálculos
import { evaluate } from 'mathjs'
// Importação da Lib 'AlertController' para fazer alerts no app
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //Declaração de variáveis

  //Variável 'conta' com valor inicial de '' (Sem conta)
  public conta = '';
  //Variável 'resultado' declarada como uma String (Tipagem)
  public resultado: string;
  //Variável 'ponta' com valor inicial de 'false' (Possibilita a inserção de outro ponto)
  private ponto = false;
  //Variável 'operacoes' com o valor dos operadores declarados dentro de um Array
  private operacoes = ['+', '-', '*', '/'];


  constructor(
    //Apelido para o AlertController
    public alertController: AlertController
  ) { }

  //Função para adicionar número, ela recebe uma string passada previamente na chamada da função
  public addNumero(numero: string) {

    //Se o resultado for igual a "true", ou seja, tenha um valor
    if (this.resultado) {
      //Chama a função "limpar()"
      this.limpar();
    }

    //Soma a variável "conta" o número passado na função (Adiciona o número na conta)
    this.conta += numero;
  }

  //Função para adicionar o ponto
  public addPonto() {

    //Se a varíavel "ponto" for igual a "true", ou seja, tenha um valor
    if (this.ponto) {
      //"Para" a função
      return;
    }

    //Soma a variável "conta" o "." (Adiciona o ponto na conta)
    this.conta += ".";
    //Atribui a variável "ponto" o valor "true" (Impossibilita a inserção de outro ponto)
    this.ponto = true;
  }

  //Função para adicionar uma operação, ela recebe uma string (operador) passada previamente na chamada da função
  public addOperacao(operador: string) {

    //Se o resultado for igual a "true", ou seja, tenha um valor
    if (this.resultado) {
      //Atribui a variável "conta" o valor da variável "resultado" que foi 
      //convertida de Number Para String (Coloca o valor do resultado na conta para a continuação da conta)
      this.conta = this.resultado.toString();
      //Atribui a variável "resultado" o valor de "null" (Limpa o resultado)
      this.resultado = null;
    }

    //Cria a constante "ultimo" e atribui a ela o valor do último caractere da varíavel conta
    const ultimo = this.conta.slice(-1);

    //Se a constante ultimo for igual a alguma das operacões declaradas
    if (this.operacoes.indexOf(ultimo) > -1) {
      //"Para" a função
      return;
    }

    //"Soma" a variável "conta" o operador passado na função (Adiciona operador na conta)
    this.conta += operador;
    //Atribui a variável "ponto" o valor "false" (Possibilita a inserção de outro ponto)
    this.ponto = false;
  }

  //Função para apagar o , ela recebe uma string (operador) passada previamente na chamada da função
  public apagarUltimo() {

    //Cria a constante "ultimo" e atribui a ela o valor do último caractere da varíavel conta
    const ultimo = this.conta.slice(-1);

    //Se a constante "ultimo" for igual a '.'
    if (ultimo == '.') {
      //Atribui a variável "ponto" o valor "false" (Possibilita a inserção de outro ponto)
      this.ponto = false;
    }

    //Atribui a variável "conta" o valor da variável "conta" removendo o último caractere (Remove o ultimo caractere adicionado)
    this.conta = this.conta.slice(0, -1);
  }

  //Função para limpar todos os campos
  public limpar() {
    //Atribui a variável "conta" o valor de '' (Limpa a conta)
    this.conta = '';
    //Atribui a variável "conta" o valor de "null" (Limpa o resultado)
    this.resultado = null;
    //Atribui a variável "ponto" o valor "false" (Possibilita a inserção de outro ponto)
    this.ponto = false;
  }

  //Função para calcular o resultado da conta
  public calcularResultado() {
    //"Tenta"
    try {
      //Atribui a variável "resultado" o valor resultante da função "evaluate" passando a conta (Mostra o resultado)
      this.resultado = evaluate(this.conta);
    }
    //Caso não consiga, recebe o erro 
    catch (e) {
      //Atribui a variável "resultado" o valor '' (Limpa o resultado)
      this.resultado = '';
      //Chama a função "presentAlert" passando 2 parâmetros
      this.presentAlert('ERRO!', 'Cálculo inválido, verifique a expressão!')
    }
  }

  //Função para mostrar alerta, recebe 2 parâmetros
  async presentAlert(titulo: string, mensagem: string) {

    //Cria uma constante chamada "alert" que recebe o alertController criado
    const alert = await this.alertController.create({
      //Título do alerta, que recebe o parâmetro passado previamente
      header: titulo,
      //Mensagem do alerta, que recebe o parâmetro passado previamente
      message: mensagem,
      //Declaração dos botões presentes no alerta
      buttons: ['OK']
    });

    //Função que apresenta o alerta na tela do usuário
    await alert.present();
  }

}

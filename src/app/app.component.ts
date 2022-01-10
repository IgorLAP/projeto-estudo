import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Comunicação unilateral - compenent.ts -> component.html
  naruto = 'naruto naruto naruto naruto'; //valores passados para o html | Interpolação
  idade = 24;
  linkImagem = 'https://images.unsplash.com/photo-1613380007620-b9612888117f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80';
  larguraImagem = 300;
  alturaImagem = 300;
  calculaAnoNascimento(){
    const today = new Date();
    return today.getFullYear() - this.idade;
  }
  //Event Bindings
  aumentar(){
    this.larguraImagem += 5;
    this.alturaImagem += 5;
  }
  diminuir(){
    this.larguraImagem -= 5;
    this.alturaImagem -= 5;
  }
}

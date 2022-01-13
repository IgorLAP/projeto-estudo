import { Component, OnInit } from '@angular/core';

import { SorteioService } from './../../compartilhado/services/sorteio.service';

@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss']
})
export class AppSorteioComponent implements OnInit {

  values: string = '';
  sorteado: string = '';

  //injetando o serviço
  constructor(private sorteioService: SorteioService) { }

  ngOnInit(): void {
  }

  enviar(){
    //textarea adiciona um \n quando é pulado linhas em seu value
    const nomes = this.values.split('\n');
    this.sorteioService.sortear(nomes).subscribe({
      next: (nome) => (this.sorteado = nome),
      error: (err) => alert(err),
      complete: () => console.log('Observable chegou ao fim')
    })
  }

}

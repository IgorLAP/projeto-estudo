import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //onde estará disponivel para aplicação poder injeta-lo
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  //recebemos um array de strings do textarea e retornarmos ao Observavble apenas um deles em string
  sortear(nomes: string[]): Observable<string>{
    return new Observable((subscriber)=>{
      if(nomes.length === 1){
        //alegando erro e parando a execução
        subscriber.error('Lista vazia');
      } else {
        const valids = [...new Set(nomes)];
        const sorteado = Math.floor(Math.random() * valids.length);
        //retornar a resposta no Observable é através do metodo next
        //isso é o tipado pelo generic do TS
        subscriber.next(nomes[sorteado]);
        //finalizando a execução do Observable, sua função foi completa
        subscriber.complete();
      }
    });
  }
}

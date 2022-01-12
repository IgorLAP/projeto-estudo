import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inc',
  //reage as mudanças feitas em sua referência, por padrão elas podem fazer alterações, mas podem não refletir na view
  // pure: false
})
export class IncPipe implements PipeTransform {

  //elemento a esquerda do pipe esperado -> array de numeros para incrementar um em cada
  transform(data: number[]): number[] {
    return data.map(i=>i+1);
  }

}

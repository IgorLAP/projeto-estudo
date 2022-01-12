import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //nome exato usado no template como as pipes built-ins
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // elemento a ser transformado - data | nomePipe:'argumentos' - query
  // primeiro parametro é o que será transformado, segundo são os possíveis parametros na estrutura
  transform(data: string[], query: string): string[] {
    return data.filter(txt => txt.toLowerCase().startsWith(query.toLowerCase()));
  }

}

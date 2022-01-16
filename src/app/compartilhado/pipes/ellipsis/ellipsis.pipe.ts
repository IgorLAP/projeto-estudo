import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text: string): string {
    if(text.length > 50){
      let ellipsis: string = '';
      for(let i = 0; i<=text.length - 15; i++){
        ellipsis += `${text[i]}`
      }
      return `${ellipsis}...`;
    } else {
      return text;
    }
  }

}

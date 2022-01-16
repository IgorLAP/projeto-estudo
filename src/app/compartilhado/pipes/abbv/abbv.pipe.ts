import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbv'
})
export class AbbvPipe implements PipeTransform {

  transform(name: string): string {
    const nameArr = name.split(' ');
    return `${nameArr[0]} ${nameArr[nameArr.length - 1][0]}.`;
  }

}

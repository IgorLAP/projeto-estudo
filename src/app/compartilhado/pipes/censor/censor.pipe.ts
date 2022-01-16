import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor',
})
export class CensorPipe implements PipeTransform {
  transform(message: string, censoreds: string): string {
    const array: string[] = censoreds.split(',');
    // for(let i in array) array[i] = array[i].toLowerCase();
    // message = message.toLowerCase();
    let censorArr: string[] = [];
    let newTxt: string = '';
    for (let i of array) {
      if (message.toLowerCase().includes(i.toLowerCase())) {
        censorArr.push('#'.repeat(i.length));
      } else {
        return message;
      }
    }
    for (let i in censorArr) {
      if (i === String(0)) {
        newTxt = message.toLowerCase().replace(array[i].toLowerCase(), censorArr[i].toLowerCase());
      } else {
        newTxt = newTxt.toLowerCase().replace(array[i].toLowerCase(), censorArr[i].toLowerCase());
      }
    }
    return newTxt;
  }
}

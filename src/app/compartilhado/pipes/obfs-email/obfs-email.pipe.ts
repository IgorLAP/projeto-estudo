import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string):string {
    const [user, provedor] = email.split('@');
    const initial = user[0];
    const ast = '*'.repeat(provedor.length - 1);
    return `${initial}${ast}@${provedor}`;
  }

}

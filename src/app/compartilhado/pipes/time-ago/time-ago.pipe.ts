import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const userDate = new Date(`${value} `);
    const uDay = userDate.getDate();
    const uMonth = (userDate.getMonth() + 1);
    const uYear = userDate.getFullYear();
    const uHour = userDate.getHours();

    const actualDate = new Date();
    const aDay = actualDate.getDate();
    const aMonth = (actualDate.getMonth() + 1);
    const aYear = actualDate.getFullYear();
    const aHour = actualDate.getHours();

    if(aYear - uYear > 0){
      return  `Há mais de ${aYear - uYear} ano(s), ${Math.abs(aMonth - uMonth)} meses e ${+(aHour - uHour)} hora(s) atrás`
    } else {
      if(aMonth - uMonth < 0){
        return `${Math.abs(aMonth - uMonth)} meses e ${+(aHour - uHour)} hora(s) atrás`
      }
      if(aHour - uHour != 0){
        return `${+(aHour - uHour)} hora(s) atrás`;
      } else {
        return 'Há menos de uma hora atrás'
      }
    }
  }

}

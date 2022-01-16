import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(dividend: number, divisor: number): number {
    return (dividend / divisor) * 100;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piping'
})
export class PipingPipe implements PipeTransform {

  transform(value:number): any {
    return Math.sqrt(value);
  }

}

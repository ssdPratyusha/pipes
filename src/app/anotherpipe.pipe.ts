import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anotherpipe'
})
export class AnotherpipePipe implements PipeTransform {

  transform(value: string, table:string): any {
    // if(!table){
    // return value;
    // }
    
  //     return value.filter
  
  // }

}
}

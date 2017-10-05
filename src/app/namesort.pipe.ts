import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesort'
})
export class NamesortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("VALUE",value,args)

    if(args){
    value.sort( function(name1, name2) {
      if ( name1.name < name2.name ){
        return -1;
      }else if( name1.name > name2.name ){
          return 1;
      }else{
        return 0;
      }
   });
  }
  else{
    value.sort( function(name1, name2) {
      if ( name1.id < name2.id ){
        return -1;
      }else if( name1.id > name2.id ){
          return 1;
      }else{
        return 0;
      }
   });
  }
    return value;
  }

}

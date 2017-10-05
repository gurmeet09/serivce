import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (searchText == null) return value;
      return value.filter(function(Name){
        return Name.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}

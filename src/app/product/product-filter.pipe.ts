import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], ...filterText: string[]): Product[] {
    filterText = filterText && filterText.length > 0 ? filterText.map(arg => arg.toLowerCase()) : [];

    return filterText.length > 0 ? value.filter((p: Product) =>
      p.name.toLowerCase().indexOf(filterText[0]) !== -1
    ) : value;
  }
}


/*
transform(value: Product[], ...filterText?: string[]): Product[] {
  filterText = filterText?filterText.toString().toLowerCase():null

  return filterText?value.filter((p:Product)=>
  p.name.toLocaleLowerCase().indexOf(filterText.toString().toLowerCase())!==-1):value;
}
*/
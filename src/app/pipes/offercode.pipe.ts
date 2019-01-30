import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(coursename: string, price?: number): any {
    if(price>24000)
       return coursename.substr(0,3).toUpperCase().concat("30 (30%discount)");
    else if(price>20000)
       return coursename.substr(0,3).toUpperCase().concat("20 (20%discount)");
    else   if(price>=18000)
       return coursename.substr(0,3).toUpperCase().concat("15 (15%discount)");
    else
       return coursename.substr(0,3).toUpperCase().concat("10 (10%discount)");
      
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { course } from 'src/model/course';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(courses:course[], pricetype:string): any {
    
    if(pricetype==="All Courses") 
       return courses;
    else if(pricetype==="High Price"){
      return courses.filter((x)=>x.price>22000);
    }
    else if(pricetype==="Moderate Price")
      return courses.filter((x)=>x.price>18000&&x.price<=22000);
    else
      return courses.filter((x)=>x.price<=18000);

  }

}

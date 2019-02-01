import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
@Input('highlight') price:number;
  constructor(private el:ElementRef) { 

  }

@HostListener('mouseover')
  changeBorder():void{
   if(this.price>24000)
      this.el.nativeElement.style.border="2px solid red";
   else if(this.price>21000)
      this.el.nativeElement.style.border="2px solid green";
   else if(this.price>18000)
      this.el.nativeElement.style.border="2px solid blue";
   else 
     this.el.nativeElement.style.border="2px solid black";
    
  }
@HostListener("mouseleave")
   retainOriginal(){
    this.el.nativeElement.style.border="none";
   }


}

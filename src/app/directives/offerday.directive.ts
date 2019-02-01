import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Directive({
  selector: '[offer]'
})
export class OfferdayDirective {
/*
   <div *offer="10">
     html code
   </div>
*/
  constructor(private vc:ViewContainerRef,
    private tref:TemplateRef<any>,private os:OfferService) { }

    @Input() set offer(data){
     
     
      if(this.os.isOfferDay())
      {
          this.vc.createEmbeddedView(this.tref);
          setTimeout(()=>this.vc.clear(),data*1000);
      }
  
      else{
              this.vc.clear();
      }
     
  }

}

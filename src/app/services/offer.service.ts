import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
message:string="20% to 50% Offer on All product. For Only 3 Days ";
  constructor() { }

  isOfferDay():boolean{
     return true;
  }

  offerMessage():string{
    return this.message;
  }
}

import { Component } from '@angular/core';
import { OfferService } from './services/offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  title = 'courseapp';

  constructor(private os:OfferService){
      this.message=os.message;
  }
}

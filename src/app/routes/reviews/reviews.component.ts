import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
visibility:boolean=true;

  constructor() { }

  ngOnInit() {
         let token=localStorage.getItem('token');
         if(token)
            this.visibility=false;
        else
            this.visibility=true;
             
  }



}

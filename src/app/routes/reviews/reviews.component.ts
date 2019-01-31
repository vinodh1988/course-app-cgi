import { Component, OnInit } from '@angular/core';
import { review } from 'src/model/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
visibility:boolean=true;
reviews:review[];

  constructor(private rs:ReviewService) { }

  ngOnInit() {
         let token=localStorage.getItem('token');
         if(token)
         {
            this.visibility=false;
            this.rs.getReviews(token).subscribe(
                  (data:review[])=>{this.reviews=data},
                  ()=>{this.reviews=[]}

            );
         }
        else
            this.visibility=true;
             
  }



}

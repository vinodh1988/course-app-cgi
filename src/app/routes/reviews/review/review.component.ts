import { Component, OnInit,Input } from '@angular/core';
import { review } from 'src/model/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input('current') current:review;
  constructor() { }

  ngOnInit() {
  }

}

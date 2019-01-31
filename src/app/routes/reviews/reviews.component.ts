import { Component, OnInit } from '@angular/core';
import { review } from 'src/model/review';
import { ReviewService } from 'src/app/services/review.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviewForm:any;
visibility:boolean=true;
reviews:review[];
courses:string[]=["Java","HTML","CSS3","Angular","React JS"];

  constructor(private formbuilder:FormBuilder,private rs:ReviewService) { 
   this.reviewForm= this.formbuilder.group({
      name:['',[Validators.required,isSymbols]],
      message:['',Validators.required],
      email:['',[Validators.required, Validators.pattern(
        "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
        
      course:['Java']
    });
  }

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


function isSymbols(input: FormControl){
  let temp:RegExp=new RegExp('[\._$@0-9]');
  let temp1:boolean=false;
  if(!temp.test(input.value))
      temp1=true;

    return temp1?null:{needFormat:true};
}

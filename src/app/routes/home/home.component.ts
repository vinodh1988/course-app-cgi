import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course } from 'src/model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courselist:course[];
  constructor(private cs:CourseService) { 
      this.cs.getCourses().subscribe(
       (data:course[])=>{this.courselist=data;},
       (error)=>{this.courselist=[]}
      );

  }

  ngOnInit() {
  }

}

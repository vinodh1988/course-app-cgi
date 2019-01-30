import { Component, OnInit } from '@angular/core';
import { course } from 'src/model/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    current:course;

  constructor() { }

  ngOnInit() {
  }

}

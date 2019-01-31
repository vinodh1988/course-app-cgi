import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
modulecode:string;
  constructor(private route:ActivatedRoute,
    private ms:ModuleService) {
      route.params.subscribe(params=>
        this.modulecode=params['mcode']);
     }

  ngOnInit() {
  }

}

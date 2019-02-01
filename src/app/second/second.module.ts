import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { ScheduleComponent } from './schedule/schedule.component';

const routes:Routes=[
  {path:"schedules",component:ScheduleComponent}
]

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class SecondModule { }

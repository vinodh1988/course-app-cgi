import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { ContactComponent } from './routes/contact/contact.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { OffersComponent } from './routes/offers/offers.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { CourseContentComponent } from './routes/home/course-content/course-content.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"contacts",component:ContactComponent},
  {path:"vclasses",component:VirtualclassComponent},
  {path:"offers",component:OffersComponent},
  {path:"newcourses",component:NewcoursesComponent},
  {path:"ccontent/:mcode",component: CourseContentComponent },
  {path:"sroutes",loadChildren:"./second/second.module#SecondModule"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

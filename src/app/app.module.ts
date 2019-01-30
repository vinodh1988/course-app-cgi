import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './routes/home/home.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { ContactComponent } from './routes/contact/contact.component';
import { OffersComponent } from './routes/offers/offers.component';
import { CourseComponent } from './routes/home/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    ReviewsComponent,
    NewcoursesComponent,
    VirtualclassComponent,
    ContactComponent,
    OffersComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { OffercodePipe } from './pipes/offercode.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { CourseContentComponent } from './routes/home/course-content/course-content.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferdayDirective } from './directives/offerday.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    CourseComponent,
    OffercodePipe,
    PricefilterPipe,
    LoginComponent,
    ReviewComponent,
    CourseContentComponent,
    HighlightDirective,
    OfferdayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

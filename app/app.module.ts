import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {CourseComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from './author.service';
import {CourseService} from './course.service';
import {AutoGrowDirective} from'./auto-grow.directive';
import {Favorite} from './favorite.component';
import {Voter} from './voter.component';
import {TwitterComponent} from './twitter.component';
import {TwitterService} from './twitter.service';
import {ConditionalStatementComponent} from './conditionals.template';
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ Favorite,AppComponent,CourseComponent,AuthorsComponent ,
                  AutoGrowDirective,Voter,TwitterComponent,
                  ConditionalStatementComponent,SummaryPipe,
                  ZippyComponent,ContactFormComponent],
  providers:    [ AuthorService,CourseService,TwitterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

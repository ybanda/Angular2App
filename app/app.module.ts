import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CourseComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from './author.service';
import {CourseService} from './course.service';
import {AutoGrowDirective} from'./auto-grow.directive';
import {Favorite} from './favorite.component';
import {Voter} from './voter.component';
import {TwitterComponent} from './twitter.component'
import {TwitterService} from './twitter.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Favorite,AppComponent,CourseComponent,AuthorsComponent ,
                  AutoGrowDirective,Voter,TwitterComponent],
  providers:    [ AuthorService,CourseService,TwitterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

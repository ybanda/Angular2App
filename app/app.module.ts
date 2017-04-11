import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CourseComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from './author.service';
import {CourseService} from './course.service';
import {AutoGrowDirective} from'./auto-grow.directive'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,CourseComponent,AuthorsComponent ,AutoGrowDirective],
  providers:    [ AuthorService,CourseService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

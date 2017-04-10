import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector:'courses',
    providers:[CourseService],
    template:`<h2>Courses</h2>
    {{ title}}
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}</li>
    </ul>`
    
})
export class CourseComponent{
  title:string ="Yashwanth`s First Angular 2 App";
  courses;
   constructor(courseService:CourseService){
      // new CourseService();
      this.courses=courseService.getCourses(); 
   }
}

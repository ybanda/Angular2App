import {Component,DoCheck} from '@angular/core';
import {CourseService} from './course.service';
@Component({
    selector:'courses',
    providers:[CourseService],
    template:`<h2>Courses</h2>
     <input type="text" autoGrow [value]="title" (input)="title=$event.target.value"/>
       <button (click)="onClear()">Clear</button>
    <b>Preview :</b> {{title}}
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}</li>
    </ul>`
    
})
export class CourseComponent implements DoCheck{
  title:string ="Yashwanth`s First Angular 2 App";
  courses;
 
   constructor(courseService:CourseService){
      // new CourseService();
      this.courses=courseService.getCourses(); 
   }
   onClear(){
        this.title='';
   }

      ngDoCheck(){
        console.log("Course - Docheck()");
    }
}

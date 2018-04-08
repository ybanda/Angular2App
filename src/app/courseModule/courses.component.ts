import {Component, DoCheck, ChangeDetectionStrategy, Input} from '@angular/core';
import {CourseService} from './course.service';
@Component({
    selector: 'courses',
    providers: [CourseService],
    template: `<h2>Courses</h2>
     <input type="text" autoGrow [value]="title" (input)="title=$event.target.value"/>
       <button (click)="onClear()">Clear</button>
    <b>Preview :</b> {{title}}
    <ul>
        <li *ngFor="let cour of courses">
        {{ cour }}</li>
    </ul>`,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseComponent implements DoCheck{
  title = 'Yashwanth`s First Angular 2 App';
  @Input() courses;
   @Input() faculties;

   constructor(courseService: CourseService){
      // new CourseService();
      this.courses = courseService.getCourses();
   }
   onClear(){
        this.title = '';
        this.courses[0] = 'C23';
   }

      ngDoCheck(){
        console.log('Course - Docheck()');
    }
}

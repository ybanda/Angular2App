import { Component, Input, Output, Renderer } from '@angular/core';
import {CourseService} from './course.service';
@Component({
    selector:'conditional',
    templateUrl:'app/html/conditionals.template.html'
    ,styleUrls:['app/css/styles.css'],
    providers:[CourseService]
})
export class ConditionalStatementComponent {
       courses=[];
    
       initializeData($event){
           console.info(" Start of initializeData"+$event);
           this.courses = new CourseService().getCourses();
           console.info(" End   of initializeData"+$event);
           
       }
}
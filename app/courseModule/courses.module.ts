import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CourseService} from './course.service';
import {CourseComponent} from './courses.component';
@NgModule({
    imports:[FormsModule,CommonModule],
    declarations:[CourseComponent],
    exports:[CourseComponent],
    providers:[CourseService]

})
export class CoursesModule{

}
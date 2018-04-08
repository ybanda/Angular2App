import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CourseService} from './course.service';
import {CourseComponent} from './courses.component';

import {FacultyComponent} from './faculty.component';
import {FacultiesComponent} from './faculties.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [CourseComponent, FacultyComponent, FacultiesComponent],
    exports: [CourseComponent, FacultyComponent, FacultiesComponent],
    providers: [CourseService]

})
export class CoursesModule{

}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const course_service_1 = require("./course.service");
const courses_component_1 = require("./courses.component");
const faculty_component_1 = require("./faculty.component");
const faculties_component_1 = require("./faculties.component");
let CoursesModule = class CoursesModule {
};
CoursesModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [courses_component_1.CourseComponent, faculty_component_1.FacultyComponent, faculties_component_1.FacultiesComponent],
        exports: [courses_component_1.CourseComponent, faculty_component_1.FacultyComponent, faculties_component_1.FacultiesComponent],
        providers: [course_service_1.CourseService]
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;
//# sourceMappingURL=courses.module.js.map
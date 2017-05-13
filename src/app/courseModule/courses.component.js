"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const course_service_1 = require("./course.service");
let CourseComponent = class CourseComponent {
    constructor(courseService) {
        this.title = "Yashwanth`s First Angular 2 App";
        // new CourseService();
        this.courses = courseService.getCourses();
    }
    onClear() {
        this.title = '';
        this.courses[0] = "C23";
    }
    ngDoCheck() {
        console.log("Course - Docheck()");
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CourseComponent.prototype, "courses", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CourseComponent.prototype, "faculties", void 0);
CourseComponent = __decorate([
    core_1.Component({
        selector: 'courses',
        providers: [course_service_1.CourseService],
        template: `<h2>Courses</h2>
     <input type="text" autoGrow [value]="title" (input)="title=$event.target.value"/>
       <button (click)="onClear()">Clear</button>
    <b>Preview :</b> {{title}}
    <ul>
        <li *ngFor="let cour of courses">
        {{ cour }}</li>
    </ul>`,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=courses.component.js.map
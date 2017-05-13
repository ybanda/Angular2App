import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'faculty',
  template: '<li>{{ faculty.title }}</li>',
  changeDetection:ChangeDetectionStrategy.OnPush
 
})
export class FacultyComponent {
  @Input() faculty; 
}

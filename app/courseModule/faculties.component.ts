import { Component, Input } from '@angular/core';

@Component({
  selector: 'faculties',
  template: '<faculty *ngFor="let f of faculties" [faculty]="f"></faculty>',
  
})
export class FacultiesComponent  {
  @Input() faculties; 
}
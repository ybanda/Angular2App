import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner-load',
    template: '<i class="fa fa-spinner fa-spin fa-5x" *ngIf="isVisible"></i>'
})
export class SpinnerLoadComponent{
@Input() isVisible= false;
}
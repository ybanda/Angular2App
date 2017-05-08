import {Component} from '@angular/core';

@Component({
    templateUrl: '/app/html/contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}
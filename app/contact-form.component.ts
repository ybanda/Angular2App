import {Component} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
    selector:'contact-form',
    templateUrl:'app/html/contact-form.component.html',
    styleUrls:['styles/styles.css']
})
export class ContactFormComponent{
    log(x){
        console.log(x);
    }
    onSubmit(form){
        console.debug(form);
    }
    form = new FormGroup({
        firstName: new FormControl('',Validators.required),
        comment: new FormControl('',Validators.required),
    })
}
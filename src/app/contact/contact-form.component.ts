import {Component} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
    selector:'contact-form',
    templateUrl:'./contact-form.component.html',
    styleUrls:['../../assets/stylesheets/styles.css']
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
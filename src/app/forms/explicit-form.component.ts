import {Component} from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';
@Component({
    selector:'explicit-form',
    templateUrl:'./explicit-form.template.html',
    styleUrls:['../../styles/styles.css']
})
export class ExplicitFormComponent{
    // form = new FormGroup({
    //     username:new FormControl('',Validators.required),
    //     password: new FormControl('',Validators.required)
    // });
    form:FormGroup;
    constructor(fb:FormBuilder){
    this.form = fb.group({
            username:['',Validators.compose(
                        [Validators.required, 
                        UsernameValidators.cannotContainSpace,
                        UsernameValidators.shouldBeUnique])],
            password:['',Validators.required]
        })
    }

signUp(){
    console.log(this.form.value);
}
log(x){
        console.log(x);
        console.log(this.form.value);
    }
}
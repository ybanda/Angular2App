import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

import {UsernameValidators} from '../shared/usernameValidators';
import {PasswordValidator} from '../shared/passwordValidators';
import {NumberValidator} from '../shared/numberValidators';

@Component({
    templateUrl:'./users-add.component.html'
})
export class UserAddComponent implements OnInit{
userForm:FormGroup;
constructor(fb:FormBuilder){
this.userForm = fb.group({
            name:['',Validators.compose([Validators.required])],
            email:['',Validators.required]
           , phone:['',Validators.compose([Validators.required
                        ,NumberValidator.mustbeValidPhoneNumber])]
            ,street:['',Validators.compose([Validators.required
                        ])]
            ,suite:['',Validators.required]
            ,city:['',Validators.required]
            ,zipCode:['',Validators.compose([Validators.required
                        ,NumberValidator.mustbeValidZipCode])]
        })
}
ngOnInit(){

}
log(val)
{
    console.log(val);
}
userFormSubmit(userForm){
console.log(this.userForm);
}
}
import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import {PasswordValidator} from './passwordValidators';
@Component({
    selector:'changePassword-form',
    templateUrl:'app/html/changePassword-form.template.html',
    styleUrls:['assets/styles/styles.css']
})

export class ChangePasswordFormComponent{
    form :FormGroup;
    constructor(fb:FormBuilder){
        this.form = fb.group({
            oldPassword:['',
                              Validators.compose(
                            [Validators.required])
                        ],
            newPassword:['',
                              Validators.compose(
                          [Validators.required,
                          PasswordValidator.minimumLengthValidate]
                        )],
            confirmPassword:['',
                               Validators.compose(
                            [Validators.required,
                            PasswordValidator.passwordMatch])
                            ]
        })
    }
    resetPassword(){
        console.log("Current Password="+this.form.controls['oldPassword'].value+
                "\n"+"New Password="+this.form.controls['newPassword'].value+
                "\n"+"Confirm Password="+this.form.controls['confirmPassword'].value);
        if(this.form.controls['oldPassword'].value!="Yashwanth"){
           this.form.controls['oldPassword'].setErrors({
                invalidOldPassword:true
           })
        
        }
}
}
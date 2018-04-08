import { Component, OnInit, Inject } from '@angular/core';
import {Http} from '@angular/http';
import {FormControl, FormGroup,FormControlName, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, AsyncValidatorFn} from '@angular/forms';
import {Router, RouterModule, ActivatedRoute} from '@angular/router';

import {UsernameValidators} from '../shared/validators/usernameValidators';
import {PasswordValidator} from '../shared/passwordValidators';
import {NumberValidator} from '../shared/numberValidators';
import {UserService} from './users.service';
import {User} from './user';
import * as CircularJSON from 'circular-json';

@Component({
    templateUrl: './users-add.component.html',
    providers: [UserService],
    styleUrls: ['../../assets/stylesheets/styles.css']
})
export class UserAddComponent implements OnInit{
userForm: FormGroup;
id: number;
title: string;
isEditMode= true;
user = new User();

constructor(@Inject(FormBuilder)fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute){
      console.log(' Inside of UserAddComponent :: Constr');
this.userForm = fb.group({
            name: ['', Validators.compose([Validators.required])],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: fb.group(
                {
                    street: ['', Validators.compose([Validators.required])]
                    ,suite: ['', Validators.required],
                    city: ['', Validators.required],
                    zipCode: ['', Validators.required]
                        //Validators.compose([Validators.required
                       // ,NumberValidator.mustbeValidZipCode])]
            })
        });

}
getUserForm(){
     console.log('Inside of getUserForm ' +CircularJSON.stringify(this.userForm));
    return this.userForm.controls;
}
getUserFormAddress():AbstractControl[]{
    console.log('Inside of getUserFormAddress '+CircularJSON.stringify(this.userForm.get('address')) );
   return ( <FormArray>this.userForm.get('address')).controls;
}
    ngOnInit(){

        console.log(' Inside of UserAddComponent :: ngOninit' + this.route);
        this.id = this.route.snapshot.params['id'];
        console.log('User Id -- ');
        if (this.id != undefined)
              {
               console.log(this.route.pathFromRoot + ' Inside of ng Oninit ::' + this.id);
               this.userService.getUser(this.id)
               .then(users => {
                    this.user = users;
                    console.log('User Data in user-add =' + JSON.stringify(this.user));
                });
                // this.router.navigate(['user/'+this.id]);
                this.title = 'Edit User';
                this.isEditMode = true;
            }
          else
            this.title = 'Add User';
}
    log(val){
        console.log(val);
    }

    userFormSubmit(){
        let result;
           console.log(' Inside of UserAddComponent :: userFormSubmit' + this.userForm + '.. id = ' + this.user.id);
            if (this.user.id)
            {
                console.log('Inside of user id  for Update =' + JSON.stringify(this.user));
                result = this.userService.updateUser(this.user);
            }
            else
                result = this.userService.setUsers(this.user);

                        result.subscribe(users => {
                            this.user = users;
                            this.router.navigate(['users']);
                        });

       // console.log(this.userForm);
    }
}
import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,RouterModule,ActivatedRoute} from '@angular/router';

import {UsernameValidators} from '../shared/usernameValidators';
import {PasswordValidator} from '../shared/passwordValidators';
import {NumberValidator} from '../shared/numberValidators';
import {UserService} from './users.service';
@Component({
    templateUrl:'./users-add.component.html',
    providers:[UserService]
})
export class UserAddComponent implements OnInit{
userForm:FormGroup;
id;
constructor(fb:FormBuilder,
    private router:Router, 
    private userService:UserService,
    private route: ActivatedRoute){
this.userForm = fb.group({
            name:['',Validators.compose([Validators.required])],
            email:['',Validators.required]
           , phone:['',Validators.compose([Validators.required
                        ,NumberValidator.mustbeValidPhoneNumber])]
            ,
            address:fb.group(
                {street:['',Validators.compose([Validators.required])]
            ,suite:['',Validators.required]
            ,city:['',Validators.required]
            ,zipCode:['',Validators.compose([Validators.required
                        ,NumberValidator.mustbeValidZipCode])]
            })
        })
}
    ngOnInit(){
        this.id=this.route.snapshot.params["id"];
        if(this.id!= undefined)
               console.log(this.route.pathFromRoot+" Inside of ng Oninit ::"+this.id);
               this.userService.getUser(this.id)
               .subscribe();
               this.router.navigate(['user/'+this.id]);
}
    log(val){
        console.log(val);
    }

    userFormSubmit(userForm){
        console.log(this.userForm);
        this.userService.setUsers(this.userForm.value);
        this.router.navigate(['users']);
        console.log(this.userForm);
    }
}
import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,RouterModule,ActivatedRoute} from '@angular/router';

import {UsernameValidators} from '../shared/usernameValidators';
import {PasswordValidator} from '../shared/passwordValidators';
import {NumberValidator} from '../shared/numberValidators';
import {UserService} from './users.service';
import {User} from './user';
@Component({
    templateUrl:'./users-add.component.html',
    providers:[UserService],
    styleUrls:['../../assets/stylesheets/styles.css']
})
export class UserAddComponent implements OnInit{
userForm:FormGroup;
id:number;
title:string;
isEditMode=false;
user = new User();
constructor(fb:FormBuilder,
    private router:Router, 
    private userService:UserService,
    private route: ActivatedRoute){
        console.log(' Inside of UserAddComponent :: Constr');
this.userForm = fb.group({
            name:['',Validators.compose([Validators.required])],
            email:['',Validators.required]
           , phone:['',Validators.required]
           //Validators.compose([Validators.required
             //           ,NumberValidator.mustbeValidPhoneNumber])]
            ,
            address:fb.group(
                {street:['',Validators.compose([Validators.required])]
            ,suite:['',Validators.required]
            ,city:['',Validators.required]
            ,zipCode:['',Validators.required]
                        //Validators.compose([Validators.required
                       // ,NumberValidator.mustbeValidZipCode])]
            })
        })
       
}
    ngOnInit(){
        
        console.log(' Inside of UserAddComponent :: ngOninit'+this.route);
        this.id=this.route.snapshot.params["id"];
        if(this.id!= undefined)
              { 
               console.log(this.route.pathFromRoot+" Inside of ng Oninit ::"+this.id);
               this.userService.getUser(this.id)
               .then(users =>{
                    this.user=users;
                    console.log('User Data in user-add ='+this.user);
                });
                // this.router.navigate(['user/'+this.id]);
                this.title="Edit User";
                this.isEditMode=true;
            }
          else  
            this.title="Add User";
}
    log(val){
        console.log(val);
    }

    userFormSubmit(userForm){
        var result;
           console.log(' Inside of UserAddComponent :: userFormSubmit'+this.userForm+".. id = "+this.user.id);
            if(this.user.id)
            { 
                console.log('Inside of user id  for Update ='+JSON.stringify(this.user));
                result = this.userService.updateUser(this.user);
            }
            else
                result =this.userService.setUsers(this.user)
                
                        result.subscribe(users=>{
                            this.user=users;
                            this.router.navigate(['users'])
                        });
            
       // console.log(this.userForm);
    }
}
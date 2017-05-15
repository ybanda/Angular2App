import {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
    templateUrl:'./users-add.component.html',
    styleUrls:['../../assets/stylesheets/bootstrap.css',
    '../../assets/stylesheets/styles.css']
})
export class UserAddComponent implements OnInit{
userForm:FormGroup;
constructor(fb:FormBuilder){
this.userForm = fb.group({
            name:['',Validators.compose([Validators.required])],
            email:['',Validators.required]
           , phone:['',Validators.required]
            ,street:['',Validators.required]
            ,suite:['',Validators.required]
            ,city:['',Validators.required]
            ,zipCode:['',Validators.required]
        })
}
ngOnInit(){

}
}
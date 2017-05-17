import {Component,OnInit} from '@angular/core';
import {Router,RouterModule,ActivatedRoute} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormGroup,FormControl} from '@angular/forms';

import {FormComponent} from './prevent-unsaved-changes-guard.service';
import {UserService} from './users.service';
@Component({
    //templateUrl:'./users.component.html',
    styleUrls:['../../assets/stylesheets/styles.css',
        '../../assets/stylesheets/bootstrap.css'],
        templateUrl:'./users.component.html',
        providers:[UserService,HttpModule]
})
//
export class UsersComponent implements OnInit,FormComponent{
    users;
    id;
    userForm:FormGroup;
    constructor(private userService:UserService,private router:Router,
     private route: ActivatedRoute){

    }
    
    ngOnInit(){
        this.id=this.route.snapshot.params["id"];
        console.log("UsersComponents :: ngOnInit");
        // this.userService.getUsers().subscribe(
        // users=>{this.users=users}
        // );
           this.userService.getUsers()
            .then(users =>{
                     console.log("title="+users);
                     this.users=users;
            });
             if(this.id!= undefined)
              this.router.navigate(['users/']);
}

}
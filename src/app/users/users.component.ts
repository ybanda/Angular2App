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
export class UsersComponent implements OnInit{
    users;
    id;
   
    constructor(private userService:UserService,private router:Router,
     private route: ActivatedRoute){
        console.log(' Inside of UsersComponent :: const');
          
    }
    
    ngOnInit(){
        this.id=this.route.snapshot.params["id"];

        console.log("UsersComponents :: ngOnInit" +" id=="+this.id);
         this.userService.getUsers().subscribe(
        users=>{this.users=users}
         );
        //  this.userService.getUsers()
        //     .then(users =>{
        //              console.log("title="+JSON.stringify(users));
        //              this.users=users;
        //     },response=>{
        //         if(response.status==404){
        //             this.responseUnknown();
        //         }
        //     }).catch(this.userService.handleError);
        //      if(this.id!= undefined)
        //       this.router.navigate(['users/']);
        // this.userService.getUsers().subscribe(
        // users=>{this.users=users}
        // );
        //  this.userService.getUsers()
        //     .then(users =>{
        //              console.log("title="+JSON.stringify(users));
        //              this.users=users;
        //     },response=>{
        //         if(response.status==404){
        //             this.responseUnknown();
        //         }
        //     }).catch(this.userService.handleError);
            if(this.id!= undefined)
            {
             this.userService.deleteUser(this.id)
             .subscribe(
                    users=>{this.users=users}
                );
             this.router.navigate(['users/']);
             
        }
    }
     private responseUnknown(){
        console.error('An error occurred in User-Service'); 
        this.router.navigate(['404Error']);
  }

}
import {Component,OnInit} from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import {UserService} from './users.service';
import {HttpModule} from '@angular/http';

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
constructor(private userService:UserService,private router:Router){

}
    ngOnInit(){
        console.log("UsersComponents :: ngOnInit");
        this.userService.getUsers().subscribe(
        users=>{this.users=users}
        );
}

}
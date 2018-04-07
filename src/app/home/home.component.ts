import {Component} from '@angular/core';
import {AuthService} from './auth.service';

import { Router, ActivatedRoute, Params,CanDeactivate } from '@angular/router';
@Component({
    template:`<h2> Home Page for Angular 4 with Typescript</h2>
    <ul><h4>List of Tabs</h4>
    <faculties [faculties]="faculties"></faculties>
</ul>
 <button class="btn btn-primary" 
         style.background-color="green" (click)="onClear()">
          Update</button>`
})
export class HomeComponent{
   faculties = [ 
          { title: 'My Angular 2 App' },
    { title: 'Learnings' },
    { title: 'Albums' },
    { title: 'Contact' }
  ];
constructor(authService:AuthService){
authService.login("user","pass");
}
 onClear(){
        console.log('onclick of clear');
        //this.faculties[0].title="Get Out";
        this.faculties[0]={title:"My Angular 4 App"};
        this.faculties[2]={title:"Users"};
        this.faculties[3]={title:"Posts"};
        this.faculties[4]=  { title: 'Albums' };
        this.faculties[5]={ title: 'Contact' };
    }
}
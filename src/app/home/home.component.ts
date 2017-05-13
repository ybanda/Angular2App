import {Component} from '@angular/core';
import {AuthService} from './auth.service';

import { Router, ActivatedRoute, Params,CanDeactivate } from '@angular/router';
@Component({
    template:`<h2> Home Page for Angular 2 with Typescript</h2>`
})
export class HomeComponent{

constructor(authService:AuthService){
authService.login("user","pass");
}
}
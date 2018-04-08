import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
    isLoggedIn = false;
    login(userName, password){
       this.isLoggedIn = true;

    }
    logout(){
        this.isLoggedIn = false;
    }
}
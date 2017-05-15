import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

    private url_users="http://jsonplaceholder.typicode.com/users";
    constructor(private http:Http){

    }
    getUsers(){
       return this.http.get(this.url_users)
        .map(res=>res.json());
    }
}
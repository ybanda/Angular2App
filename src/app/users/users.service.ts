import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from './user';

@Injectable()
export class UserService {

    private url_users="http://jsonplaceholder.typicode.com/users";
    constructor(private http:Http){

    }
    // getUsers(){
    //    return this.http.get(this.url_users)
    //     .map(res=>res.json());
    // }
     setUsers(users){
       return this.http.post(this.url_users,users)
        .map(res=>res.json());
    }
    getUser(userId:number){
        return this.http.get(this.url_users+"/"+userId)
        .toPromise()
        .then(res=>res.json())
        .catch(err=>console.error(err));

    }
    getUsers():Promise<User[]>{
        return this.http.get(this.url_users)
                .toPromise()
                .then(res =>res.json())
                .catch(err=>console.error(err));
    }
    deleteUser(userId:number):Promise<void>{
        return this.http.delete(this.url_users+"/"+userId)
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred in User-Service', error); 
        return Promise.reject(error.message || error);
  }
}
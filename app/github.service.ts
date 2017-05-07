import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService{
userName="octocat";
private _users_url ="https://api.github.com/users/";
private _followers_url="";

constructor(private _http:Http){
    this._users_url=this._users_url+this.userName;
    this._followers_url=this._users_url+"/followers";
    console.log("Inside of GitService Constructor"+_http+
                "Users URL="+this._users_url+":: Followers_URL="
                +this._followers_url);
}

getUsers(){
    console.log("Inside of GitService :: GetUsers");
    return this._http.get(this._users_url)
                .map(res => res.json());
            

}
getFollowers(){
    console.log("Inside of GitService :: GetFollowers");
    
    return this._http.get(this._followers_url)
                .map(resp => resp.json());
                
}

}
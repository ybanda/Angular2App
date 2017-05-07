import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable,Inject} from '@angular/core';

export class PostService{
    private _url="https://jsonplaceholder.typicode.com/posts";
    constructor(@Inject(Http) private _http:Http){

    }
    getPosts(){
       return  this._http.get(this._url)
        .map(res =>res.json());
    }
    createPost(post){
      return  this._http.post(this._url,JSON.stringify(post))
            .map(res=>res.json());
    }
}
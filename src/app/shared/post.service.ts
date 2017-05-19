import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable,Inject} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';


export class PostService{
    private _url="http://jsonplaceholder.typicode.com/posts";
    constructor(@Inject(Http) private _http:Http){

    }
    
    getPosts():Promise<Post[]>{
    //    return  this._http.get(this._url)
    //     .map(res =>res.json());
        return  this._http.get(this._url)
                    .map(res =>res.json())
                    .toPromise();
    }
    createPost(post : Post){
      return  this._http.post(this._url,JSON.stringify(post))
            .map(res=>res.json());
    }
}
import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{

    posts;
    private url_posts = "http://localhost:3000/posts";

    constructor(private http:Http){

    }
    getPosts(){
      return  this.http.get(this.url_posts)
        .toPromise()
        .then(posts=>posts.json())
        .catch(err=>console.error(err));
    }

}
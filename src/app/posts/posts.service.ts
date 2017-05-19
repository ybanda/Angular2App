import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Post,Comments} from './post';

@Injectable()
export class PostService{

    posts;
    private url_posts = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http:Http){

    }
    getPosts(){
      return  this.http.get(this.url_posts)
        .toPromise()
        .then(posts=>posts.json())
        .catch(err=>console.error(err));
    }
    getComments(post:Post):Promise<Comments[]>{
        return this.http.get(this.url_posts+"/"+post.id+"/comments").delay(200)
            .toPromise()
            .then(comment=>comment.json())
            .catch(err=>console.error(err));
    }

}
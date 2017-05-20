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
     
    //  getPosts(filter?){
    //      var url =this.url_posts;
    //      if(filter && filter.userId)
    //         url+="?userId="+filter.userId;
    //      return  this.http.get(url)
    //         .toPromise()
    //         .then(posts=>posts.json())
    //         .catch(err=>console.error(err));
    // }
    
    getComments(post:Post):Promise<Comments[]>{
        return this.http.get(this.url_posts+"/"+post.id+"/comments").delay(200)
            .toPromise()
            .then(comment=>comment.json())
            .catch(err=>console.error(err));
    }
    getPost(userId){
        if(userId==-1)
            return this.getPosts();
        
        return this.http.get(this.url_posts+"?userId="+userId)
        //.delay(2000)
        .toPromise()
        .then(posts=>posts.json())
        .catch(err=>console.error(err));
    }

//  getPost(userId){
       
//         this.getPosts(userId);
//     }
}
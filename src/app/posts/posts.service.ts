import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Post, Comments} from './post';
import { Observable } from 'rxjs/Observable';
import { BadInput } from './../shared/validators/bad-input';
import { NotFoundError } from '../shared/validators/not-found-error';
import { AppError } from './../shared/validators/app-error';

@Injectable()
export class PostService{

    posts;
    private url_posts = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http){

    }
    getPosts(){
      return  this.http.get(this.url_posts)
        .toPromise()
        .then(posts => posts.json())
        .catch(this.handleError);
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

    getComments(post: Post): Promise<Comments[]>{
        return this.http.get(this.url_posts + '/' + post.id + '/comments').delay(200)
            .toPromise()
            .then(comment => comment.json())
            .catch(this.handleError);
    }
    getPost(userId){
        if (userId == -1)
            return this.getPosts();

        return this.http.get(this.url_posts + '?userId=' + userId)
        //.delay(2000)
        .toPromise()
        .then(posts => posts.json())
        .catch(this.handleError);
    }

//  getPost(userId){

//         this.getPosts(userId);
//     }

createPost(inputTitle: HTMLInputElement){
    const post = {title: inputTitle.value};
    inputTitle.value = '';
    this.http.post(this.url_posts, JSON.stringify(post))
    .subscribe(response => {
        console.log('createPost :: ' + response);
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
    }, this.handleError
    );
}

private handleError(error: Response){
    if (error.status == 404)
        return Observable.throw(new NotFoundError(error.json()));
    else if (error.status === 400)
        return Observable.throw(new BadInput(error.json()));
    else
        return Observable.throw( new AppError(error.json()));
}
}
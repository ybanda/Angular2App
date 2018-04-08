import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import * as _ from 'underscore';

import {PostService} from './posts.service';
import {UserService} from '../users/users.service';
import {Post, Comments} from './post';
import { PostGenericService } from '../shared/services/post.genericService';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['../../assets/stylesheets/styles.css'],
    providers: [PostService, UserService]
})
export class PostsComponent implements OnInit{
    posts;
    users;
    userId;
    pageSize;
    pagedPosts;
    isPostLoading= true;
    isPostClicked= false;
    isCommentLoaded= true;
    post = new Post();
    comments: Comments[];

    constructor(private postService: PostService,
                private userService: UserService,
            private postGenericService : PostGenericService){

    }
    ngOnInit(){
        this.getPosts();
        this.getUsers();

    }

    private getUsers(){
            this.userService.getUsers().subscribe(
                users => {this.users = users; }
            );

    }
    private getPosts(){
        //     this.postGenericService.getAll().subscribe(posts=>{
        //     this.posts = posts,
        //     this.isPostLoading=false;
        //     this.pageSize =posts.length/10;
        //     this.pagedPosts=_.take(this.posts,this.pageSize);
        //     }
        // );

        this.postService.getPosts().then(posts => {
            this.posts = posts,
            this.isPostLoading = false;
            this.pageSize = posts.length / 10;
            this.pagedPosts = _.take(this.posts, this.pageSize);
            }
        );

    }

    onPostSelect(postObj: Post){

        this.post = postObj;
        this.isPostClicked = true;

        console.log('Post Selected =' + postObj.title + '...' + postObj.body);
        this.postService.getComments(postObj).then(comments => {
            this.comments = comments,
            this.isCommentLoaded = false;
        console.log(this.comments); });

    }
    onUserChange(user){
        this.isPostLoading = true;
        console.log(user.target.value);
        this.userId = user.target.value;
        this.postService.getPost(this.userId)
        .then(posts => {
                    this.posts = posts,
                    this.isPostLoading = false;
                    this.pageSize = posts.length / 10;
                    });

    }
    pageChanged(value){
         const startIndex = (value.id - 1) * 10;
        console.log('Json Value = ' + JSON.stringify(value) + '...' + this.pageSize + '///' + startIndex);
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), 10);
    }

}
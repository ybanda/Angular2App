import {Component,OnInit} from '@angular/core';

import {PostService} from './posts.service';
import {Post} from './post';
@Component({
    selector:'posts',
    templateUrl:'./posts.component.html',
    styleUrls:['../../assets/stylesheets/styles.css'],
    providers:[PostService]
})
export class PostsComponent implements OnInit{
    posts;
    isLoading=true;
    isClicked=false;
    post = new Post();
    
    constructor(private postService:PostService){

    }
    ngOnInit(){
        this.postService.getPosts().then(posts=>{
            this.posts = posts,
            this.isLoading=false;
            }
        );
        
    }
    onPostSelect(post:Post){
        this.isClicked=true;
        this.post = post;
        console.log('Post Selected ='+post.title +"..."+post.body);
    }
}
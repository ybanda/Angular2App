import {Component,OnInit} from '@angular/core';

import {PostService} from './posts.service';
import {Post,Comments} from './post';
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
    comments:Comments[];
    
    constructor(private postService:PostService){

    }
    ngOnInit(){
        this.postService.getPosts().then(posts=>{
            this.posts = posts,
            this.isLoading=false;
            }
        );
        
    }
    onPostSelect(postObj:Post){
        this.isClicked=true;
        this.post = postObj;
        console.log('Post Selected ='+postObj.title +"..."+postObj.body);
        this.postService.getComments(postObj).then(comments=>{
            this.comments=comments,
        console.log(this.comments)});
    }
}
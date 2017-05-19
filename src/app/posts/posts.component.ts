import {Component,OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

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
    isCommentLoaded=true;
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
        
        this.post = postObj;
        this.isClicked=true;
       
        console.log('Post Selected ='+postObj.title +"..."+postObj.body);
        this.postService.getComments(postObj).then(comments=>{
            this.comments=comments,this.isCommentLoaded=false
        console.log(this.comments)})
       
        
        
    }
}
import {Component,OnInit} from '@angular/core';

import {PostService} from './posts.service';

@Component({
    selector:'posts',
    templateUrl:'./posts.component.html',
    styleUrls:['../../assets/stylesheets/styles.css'],
    providers:[PostService]
})
export class PostsComponent implements OnInit{
    posts;
    
    constructor(private postService:PostService){

    }
    ngOnInit(){
        this.postService.getPosts().then(posts=>{
            this.posts = posts}
        );

    }
}
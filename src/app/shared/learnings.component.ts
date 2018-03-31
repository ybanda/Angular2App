import {Component,OnInit,Input} from '@angular/core';
import {GithubService} from './github.service';
import {Observable} from 'rxjs/Observable';
import {PostService} from './post.service';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FavChangedEvent } from '../forms/favorite.component';

@Component({
    selector:'learnings',
    templateUrl:'./learnings.component.html',
    styleUrls:['../../assets/stylesheets/styles.css'],
    providers:[GithubService,PostService,HttpModule]
})
export class LearningComponent implements OnInit{
 isGitLoading =true;
    @Input() gitName="";
    userData={};
    name="octocat";
    formVal:FormGroup;
    followerData=[];
    form = new FormGroup({
        gitName:new FormControl('',Validators.required)
        
     });
  constructor(fb:FormBuilder, private _postService : PostService,private _gitService:GithubService){
          this.formVal = fb.group({
             search:[]
           });
  }
    ngOnInit(){
      console.log(" Inside of GithubComponent :: ngOnInit()");
      Observable.forkJoin(
          this._gitService.getUsers(this.name),
          this._gitService.getFollowers(this.name))
              .subscribe(
                res =>{
                    this.userData= res[0];
                    this.followerData =res[1];
                },
                error=>console.error(error),
                () =>{ this.isGitLoading=false;}
         );
    }
      gitSearch(){
        console.log("GitName::"+this.form.controls['gitName'].value);
        Observable.forkJoin(
          this._gitService.getUsers(this.form.controls['gitName'].value),
          this._gitService.getFollowers(this.form.controls['gitName'].value))
              .subscribe(
                res =>{
                    this.userData= res[0];
                    this.followerData =res[1];
                },
                error=>console.error(error),
                () =>{ this.isGitLoading=false;}
         );
    }
    title="Yashwanth`s First Angular 2 App";
    url="https://www.google.com";
    isActive=false;
    isLoved=true;

    post={
        title:"Title",
        isFavorite:true,
        newValue:10,
    }

    onDivClick($event){
        console.log("On Div Click Clicked",$event);
    }

    onClick($event){
        $event.stopPropagation();
        console.log("On Click Clicked",$event);
    }

    onFavoriteChange($event){
        console.log("onFavoriteChange",$event);
        this.post.newValue=$event.newValue;
    }
     onFavChanged(eventArgs:FavChangedEvent){
      console.log('Inside of Fav Changed '+eventArgs);
  }
} 
import {Component,OnInit} from '@angular/core';
import {GithubService} from './github.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector:'github',
    styleUrls:['assets/styles/styles.css'],
    templateUrl:'/app/html/github.component.html',
    providers:[GithubService]
})
export class GithubComponent implements OnInit{
    isGitLoading =true;
    userData={};
    followerData=[];
    constructor(private _gitService:GithubService){
      console.log(" Inside of GithubComponent::Const ::"+_gitService);
    }

    ngOnInit(){
      console.log(" Inside of GithubComponent :: ngOnInit()");
      Observable.forkJoin(
          this._gitService.getUsers(),
          this._gitService.getFollowers())
              .subscribe(
                res =>{
                    this.userData= res[0];
                    this.followerData =res[1];
                },
                error=>console.error(error),
                () =>{ this.isGitLoading=false;}
         );
    }
}
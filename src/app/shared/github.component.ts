import {Component, OnInit, Input} from '@angular/core';
import {GithubService} from './github.service';
import {Observable} from 'rxjs/Observable';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'github',
    styleUrls: ['../../assets/stylesheets/styles.css'],
    templateUrl: './github.component.html',
    providers: [GithubService]
})
export class GithubComponent implements OnInit{
    isGitLoading = true;
    @Input() gitName= '';
    userData= {};
    name= 'octocat';
    followerData= [];
    form = new FormGroup({
        gitName: new FormControl('', Validators.required)

     });
    constructor(private _gitService: GithubService){

      console.log(' Inside of GithubComponent::Const ::' + _gitService);
    }

    ngOnInit(){
      console.log(' Inside of GithubComponent :: ngOnInit()');
      Observable.forkJoin(
          this._gitService.getUsers(this.name),
          this._gitService.getFollowers(this.name))
              .subscribe(
                res => {
                    this.userData = res[0];
                    this.followerData = res[1];
                },
                error => console.error(error),
                () => { this.isGitLoading = false; }
         );
    }
    gitSearch(){
        console.log('GitName::' + this.form.controls['gitName'].value);
        Observable.forkJoin(
          this._gitService.getUsers(this.form.controls['gitName'].value),
          this._gitService.getFollowers(this.form.controls['gitName'].value))
              .subscribe(
                res => {
                    this.userData = res[0];
                    this.followerData = res[1];
                },
                error => console.error(error),
                () => { this.isGitLoading = false; }
         );
    }
}
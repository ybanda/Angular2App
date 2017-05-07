import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PostService} from './post.service';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {HttpModule} from '@angular/http';
@Component({
    selector: 'my-app',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading"> {{title}}</div>
        <div class="panel-body">
         <h1>Hello Angular 2 -TypeScript</h1>
          
        <zippy title="Rxjs:Reactive Extensions" priority=1>
            <form [formGroup]="formVal">
             <input id="search" 
                    type="text" class="form-control" 
                    formControlName="search"> 
             </form>
        </zippy>
        <zippy title="Model Driven :Change Password Form" priority=3>
            <changePassword-form></changePassword-form>
        </zippy>
        <zippy title="Model Driven :Explicit Control-Form with validation" priority=2>
            <explicit-form></explicit-form>
        </zippy>
        <zippy title="Template Driven : Subscription-Form" priority=2>
            <subscription-form></subscription-form>
        </zippy>
        <zippy title="Template Driven Forms" priority=2>
            <contact-form></contact-form>
        </zippy>
        <zippy title="Voter and Twitter Example">
            <voter></voter>
            <hr class="half-rule"/> 
            <twitter></twitter>
        </zippy>
        <zippy title="Conditionals Operators">     
             <courses></courses>
             <hr class="half-rule"/>
             <authors></authors>
             <hr class="half-rule"/> 
             <conditional></conditional>
             <hr class="half-rule"/> 
        </zippy>
        <zippy title="Init">
            New Value = {{post.newValue}}<br>
            <a href="{{url}}">Property-Binding</a>
            <i class ="glyphicon glyphicon-star"></i>
            <favorite [isFavorite]="post.isFavorite" 
                  (change)="onFavoriteChange($event)" 
                  [ngStyle]="{
                  background:isLoved?'lightgrey':'deeppink'  
                    }">
            </favorite>
            <button 
                class="btn btn-primary" 
                [style.background]="isActive ? 'green' : 'red'" >Submit</button>
            <div on-click="onDivClick($event)">
                <button on-click="onClick($event)">Submit</button>
            </div>
        </zippy>
      </div> 
    </div>`,
    providers:[PostService,HttpModule]
            
    })
export class AppComponent {
    
    formVal:FormGroup;
    constructor(fb:FormBuilder, private _postService : PostService){
    this._postService.getPosts().subscribe(posts => console.log(posts));
        this.formVal = fb.group({
             search:[]
           });
    console.log(new Observable() +" Throw "+Observable.throw(new Error("Error"))+
    "From Array"+Observable.from([23,32,342]));
        var search = this.formVal.controls['search'];
        search.valueChanges
              .debounceTime(400)
              .map(str=>(<string>str).replace(/ /g,'-'))
              .subscribe(x =>console.log(x),
              error=>console.error(error),
               () => console.log("Remote Date Completed"));
        //var observable = Observable.from([1,2,3,4,5]);
        //var observable = Observable.of(1,2,3,4,5);
        var retryCount=0;
        var ajaxCall = Observable.of('url')
                        .flatMap(() => {
                            if(++retryCount<10)
                                return Observable.throw(new Error("Request Retry Failed"));


                            return Observable.of([1,2,3,retryCount]);
                        });
                    ajaxCall.retry()
                            .subscribe(
                                x=>console.log(x),
                                error => console.error(error)
                        );
////////////////////////////////////////////////////
        var remoteData = Observable.throw(new Error(" Remote Data Failed.")).delay(2000);
      //var remoteData = Observable.of([4,5,6,7]);
                            remoteData.timeout(1000);
                            remoteData.catch(err =>{
                                var localData = Observable.of(["Error Remote Data Failed in Catch"]);
                                return localData;
                            })
                            .subscribe(
                                x=>console.log(x),
                                () => console.log("Remote Date Completed"));



////////////////////////////////////////////////////
        // var observable = Observable.of({
        //                       userId:1,userName:'test'
        //                  }).delay(2000);
        // var observarbleErr = Observable.throw(new Error("Something Failed"))
        //                                 .subscribe(x=>console.log(x),
        //                                             error=>console.log(error));
        // var observable2 = Observable.of([1,2,3]).delay(1444);
        // Observable.forkJoin(observable,observable2)
        //           .map(join=> new Object({
        //            user:join[0], tweets : join[1]}))
        //             .subscribe(
        //             result=>console.log(result),
        //             error => console.error(error));
        
        //console.log("Observable with values ="+observable);
///////////////////////////////////////////////////////////////////
        // var obs = Observable.interval(1000)
        //           .map(x=>{
        //               console.log( "Calling Server to get the results")
        //               return [1,2,3];
        //         })
        //           .subscribe(news=>console.log(news));
        // var obs = Observable.interval(1000)
        //           .flatMap(x=>{
        //               console.log( "Calling Server to get the results")
        //               return Observable.of([1,2,3]);
        //         })
        //           .subscribe(news=>console.log(news));
///////////////////////////////////////////////////////////////////
        // var startDates =[];
        // var startDate = new Date();
        // for(var day=-7 ;day<=7;day++){
        // var date = new Date(
        //     startDate.getFullYear(),
        //     startDate.getMonth(),
        //     startDate.getDate()+day);
        //     startDates.push(date);
        // }
        // Observable.from(startDates)
        //           .map(date=>{
        //                     console.log(" Getting dated "+date);
        //                     return [date.getDate()];
        //                 })
        //           .subscribe(x=>console.log(x));

///////////////////////////////////////////////////////////////

       // var keyups= Observable.fromEvent($("#search"),"keyup");
        // keyups.subscribe(function(data){
        //     console.log(data);
        // })
       // keyups.subscribe(data=>console.log(data));


        //    var debounce =  _.debounce(function(text){
        //         var url="https://api.spotify.com/v1/search?type=artist&q="+text;
        //         $.getJSON(url,function(artists){
        //         console.log(artists);
        //     })
        //    },400);
        //      $("#search").keyup(function(e){
        //     var text =e.target.value;
        //     if(text.length<3)
        //         return;
        //    console.log(text);
        //     debounce(text);
        // });
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
   
}
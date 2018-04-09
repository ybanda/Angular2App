import {Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PostService} from './shared/post.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {HttpModule} from '@angular/http';
import * as Immutable from 'immutable';
import { NgRedux,select } from 'ng2-redux';
import { IAppState, rootReducer } from './shared/store';
import { INCREMENT } from './shared/redux/actions';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [PostService, HttpModule]


    })
export class AppComponent implements OnInit, OnDestroy, DoCheck {

    formVal: FormGroup;
    isLoading = true;
  // @select('count') count;
  @select(s =>s.get('count')) count;
  @select(['messaging','newMessages']) newMessages;
   @select((s:IAppState)=>s.messaging.newMessages) newMessage;
    ngOnInit(){
        console.log(' Inside Ng On Init');
        this._postService.getPosts()
            .then(posts => {
                     this.isLoading = false;
                     console.log('title=' + posts[0].title);
            });
            //  this._postService.getPosts()
            // .subscribe(posts =>{
            //          this.isLoading=false;
            //          console.log(posts[0].title)
            // });
    }

    ngOnDestroy(){
        console.log(' Inside Ng On Destroy');
    }

    constructor(fb: FormBuilder, private _postService : 
        PostService,private ngRedux :NgRedux<Map<string,any>>){
       
        // ngRedux.subscribe(()=>{
        //     var store = ngRedux.getState();
        //     this.count=store.count;
        //     console.log(' Count in Store ='+this.count);
        // })
        // this._postService.createPost({
        //     userId:1,title:"Yasjh",body:"sdfdsfsd"
        // });
        let movie = Immutable.Map({title : 'm1', genre: 1});
        console.log(movie);
        console.log(movie.get('title'));
        movie.set('title', 'm2');
        movie =  movie.set('title', 'm3');
        console.log(movie + ' Js:' + movie.toJS());
        let listIds = Immutable.List([1, 2, 3, 4]);
        listIds.push(6);
        console.log(listIds);
        listIds = listIds.push(5);
        console.log(listIds);
        this.formVal = fb.group({
             search: []
           });

    console.log(new Observable() + ' Throw ' + Observable.throw(new Error('Error')) +
    'From Array' + Observable.from([23, 32, 342]));
        const search = this.formVal.controls['search'];
        search.valueChanges
              .debounceTime(400)
              .map(str => (<string>str).replace(/ /g, '-'))
              .subscribe(x => console.log(x),
              error => console.error(error),
               () => console.log('Remote Date Completed'));
        //var observable = Observable.from([1,2,3,4,5]);
        //var observable = Observable.of(1,2,3,4,5);
        let retryCount = 0;
        const ajaxCall = Observable.of('url')
                        .flatMap(() => {
                            if (++retryCount < 10)
                                return Observable.throw(new Error('Request Retry Failed'));


                            return Observable.of([1, 2, 3, retryCount]);
                        });
                    ajaxCall.retry()
                            .subscribe(
                                x => console.log(x),
                                error => console.error(error)
                        );
////////////////////////////////////////////////////
        const remoteData = Observable.throw(new Error(' Remote Data Failed.')).delay(2000);
      //var remoteData = Observable.of([4,5,6,7]);
                            remoteData.timeout(1000);
                            remoteData.catch(err => {
                                const localData = Observable.of(['Error Remote Data Failed in Catch']);
                                return localData;
                            })
                            .subscribe(
                                x => console.log(x),
                                () => console.log('Remote Date Completed'));



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


    title= 'Yashwanth`s First Angular 2/4 App';
    url= 'https://www.google.com';
    isActive= false;
    isLoved= true;

    post= {
        title: 'Title',
        isFavorite: true,
        newValue: 10,
    };

    onDivClick($event){
        console.log('On Div Click Clicked', $event);
    }

    onClick($event){
        $event.stopPropagation();
        console.log('On Click Clicked', $event);
    }

    onFavoriteChange($event){
        console.log('onFavoriteChange', $event);
        this.post.newValue = $event.newValue;
    }

    ngDoCheck(){
       // console.log("AppComp - Docheck()");
    }
    
   
  
    increment(){
     // this.count++;
     this.ngRedux.dispatch({type:INCREMENT});
    }

}
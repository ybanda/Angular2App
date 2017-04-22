import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <head>
        <title>{{title}}</title>
    </head>
        <h1>Hello Angular 2 Start</h1>
        <a href="{{url}}">Property-Binding</a>
        <i class ="glyphicon glyphicon-star"></i>
        <favorite [isFavorite]="post.isFavorite" 
        (change)="onFavoriteChange($event)" 
        [style.background]="isLoved ? 'lightgrey': 'deeppink' "></favorite>
        New Value = {{post.newValue}}<br>
            <voter></voter>
        <hr class="half-rule"/> 
            <twitter></twitter>
        <hr class="half-rule"/> 
            <courses></courses>
        <hr class="half-rule"/>
            <authors></authors>
        <hr class="half-rule"/> 
            <conditional></conditional>
        <hr class="half-rule"/> 
        <button 
            class="btn btn-primary" 
            [style.background]="isActive ? 'green' : 'red'" >Submit</button>
        <div on-click="onDivClick($event)">
            <button on-click="onClick($event)">Submit</button>
        </div>   `
            
    })
export class AppComponent {
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
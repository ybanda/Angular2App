import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading"> {{title}}</div>
        <div class="panel-body">
         <h1>Hello Angular 2 Start</h1>
             <hr class="half-rule"/> 
        <zippy title="Forms">
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
    </div>`
            
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
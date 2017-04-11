import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <head>
        <title>{{title}}</title>
    </head>
        <h1>Hello Angular 2 Start</h1>
        <a href="{{url}}">Property-Binding</a>
        <courses></courses>
        <authors></authors>
        <button 
            class="btn btn-primary" 
            [style.background]="isActive ? 'green' : 'red'" >Submit</button>
        <div on-click="onDivClick($event)">
            <button on-click="onClick($event)">Submit</button>
        </div>   `
            
})
export class AppComponent {
 //console.log('Start of App component');  
  title="Yashwanth`s First Angular 2 App";
  url="https://www.google.com";
  isActive=false;

onDivClick($event){
  console.log("On Div Click Clicked",$event);
}
onClick($event){
    $event.stopPropagation();
    //alert($event);
    console.log("On Click Clicked",$event);
    }
}
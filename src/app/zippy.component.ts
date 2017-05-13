import {Component,Input} from '@angular/core';

@Component({
    selector:'zippy',
    //templateUrl:'../app/html/zippyComponent.html',
    template:`
    <div class="zippy">
        <div class="zippyHeader" (click)="chevronClick()">
        {{title}}
            <i class="pull-right glyphicon" 
                   [ngClass]= "{
                                 'glyphicon-chevron-down':!isSelected,
                                 'glyphicon-chevron-up':isSelected
                             }"
                ></i>
        </div>
        <div *ngIf="isSelected" class="zippyBody">
            <ng-content></ng-content>
        </div>
    </div>   `,
    styles:[``],
    styleUrls:['../styles/styles.css']
    ,providers:[]

})
/**
 * 
 */
export class ZippyComponent{

constructor(){
      console.log(this.title +".........."+this.isSelected);
}
ngOnInit(){
     this.isSelected =true ?this.priority==1:this.isSelected;
     console.log(this.title +".........."+this.isSelected +"...."+this.priority);
}
    isSelected= false;
    @Input() title:string;
    @Input() priority:Number;
    chevronClick(){
        this.isSelected =!this.isSelected;

    }
}
import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'favorite',
    templateUrl:'app/html/favorite.template.html',
    styles:[ ]
    ,styleUrls:['assets/styles/styles.css']
})

export class Favorite {
   @Input() isFavorite=false;
   @Input() isLoved=false;
    count=10;
   @Output() change = new EventEmitter();
    
    onStarClick(){
        console.log("Inside of Fav Click");
        this.isFavorite=!this.isFavorite;
        
    }
    onLoveClick($event)
    {
        console.log("Inside of Love Click"+$event);
      
        console.log("Inside of Love Click="+this.count);
        this.change.emit({newValue:(  this.isLoved?this.count:this.count+1)});
          this.isLoved = !this.isLoved;
        console.log("Inside of Love Click="+this.count);
        
  }
}
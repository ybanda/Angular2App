import {Component,Input,Output,Renderer,EventEmitter} from '@angular/core';
import {TwitterService} from './twitter.service'
@Component({

    selector:'twitter',
    templateUrl:'app/html/twitter.template.html',
    styles:[ ],
    providers:[TwitterService]
    
    ,styleUrls:['styles/styles.css']

})
export class TwitterComponent{
    @Input() isFavorite=false;
    count=10;
    @Output() change = new EventEmitter();
    inputData: any[];
    
    constructor(twitterService:TwitterService){
         this.inputData=twitterService.getTweets(); 
   }

onLikeClick(newValue){
    
     console.log("Start of onLikeClick: Index ="+newValue+
         ": Count ="+this.inputData[newValue].likeCount+" : isLiked = "+this.inputData[newValue].isLiked);
     this.inputData[newValue].isLiked = !this.inputData[newValue].isLiked;
     this.inputData[newValue].likeCount=this.inputData[newValue].isLiked?this.inputData[newValue].likeCount+1:this.inputData[newValue].likeCount-1;
      console.log("End of onLikeClick: Index ="+newValue+
         ": Count ="+this.inputData[newValue].likeCount+" : isLiked = "+this.inputData[newValue].isLiked);
}

}
import {Component,Input,Output,Renderer,EventEmitter} from '@angular/core';
import {TwitterService} from './twitter.service'
@Component({

    selector:'twitter',
    templateUrl:'app/html/twitter.template.html',
    styles:[
        `.account{
            color:#ccc;
        }
        .glyphicon-heart{
           color:#ccc;
            cursor:pointer;
          
        }
        .highlighted{
            color:deeppink;
        }`
    ],
    providers:[TwitterService]

})
export class TwitterComponent{
    @Input() isFavorite=false;
    count=10;
   @Output() change = new EventEmitter();
    inputData=[
        {id:0,name:'Mosh',accountName:'Msadasdasd',tagLine:'There is only one tage line for Mosh, Still waiting add the correct TagLine',likeCount:10,isLiked:false},
        {id:1,name:'Feng',accountName:'Kardsadaa',tagLine:'There is only one tage line for Feng, Still waiting add the correct TagLine',likeCount:90,isLiked:false},
        {id:2,name:'Bykrz',accountName:'Dersdaanda',tagLine:'There is only one tage line for Bykr, Still waiting add the correct TagLine',likeCount:1,isLiked:false},
        {id:3,name:'Doug',accountName:'Sterweanda',tagLine:'There is only one tage line for Doug, Still waiting add the correct TagLine',likeCount:75,isLiked:false}
    ];
onLikeClick(newValue)
{
     console.log("Start of onLikeClick: Index ="+newValue+
         ": Count ="+this.inputData[newValue].likeCount+" : isLiked = "+this.inputData[newValue].isLiked);
     this.inputData[newValue].isLiked = !this.inputData[newValue].isLiked;
     this.inputData[newValue].likeCount=this.inputData[newValue].isLiked?this.inputData[newValue].likeCount+1:this.inputData[newValue].likeCount-1;
      console.log("End of onLikeClick: Index ="+newValue+
         ": Count ="+this.inputData[newValue].likeCount+" : isLiked = "+this.inputData[newValue].isLiked);
}

}
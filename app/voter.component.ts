import {Component,Input,Output,EventEmitter,ElementRef,Renderer} from '@angular/core';
@Component({
   selector:'voter',
   template:
   `<h3>
        <i class="glyphicon glyphicon-menu-up"
             [class.highlight]="myVote==1"
             (click)="onVoteClick(+1)"></i>
        <p center>{{count + myVote}}<p>
        <i class="glyphicon glyphicon-menu-down"
             [class.highlight]="myVote==-1"
            (click)="onVoteClick(-1)"></i>
            
    </h3>`,
   styles:[  ]
    ,styleUrls:['styles/styles.css']
})

export class Voter{
   
    count=10;
    myVote=0;
    @Input() isUpVoted=false;
    @Input() isDownVoted=false;
     @Output() voteChange = new EventEmitter();
    onVoteClick(value){
      //  this.render.setElementStyle(this.el.nativeElement,'color','orange');
        console.log("Start : Vote Clicked, Value = "+this.count+" , Click Value  ="+(value==1 ? "UpVote":"DownVote") +" , My Vote Value ="+this.myVote);
      if(value==1){
          if(this.myVote==1)
             return;
         this.myVote++;
         this.voteChange.emit({myVote:this.myVote});
      //   this.isUpVoted = this.count ==11 ?!this.isUpVoted:this.isUpVoted;
        }
      else if(value==-1){
           if(this.myVote==-1)
           {
               //alert(document.getElementsByTagName("h3").length);
             return;
           }
        this.myVote--;
          this.voteChange.emit({myVote:this.myVote});
       // this.isDownVoted= this.count ==9 ?!this.isDownVoted:this.isDownVoted;
     }
       console.log("End   : Vote Clicked, Value = "+this.count+" , Click Value  ="+(value==1 ? "UpVote":"DownVote") +" , My Vote Value ="+this.myVote);
    }
}
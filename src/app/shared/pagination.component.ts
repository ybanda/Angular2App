import {Component,ElementRef,Renderer} from '@angular/core'
@Component({
    selector:'pagination',
    templateUrl:"./pagination.component.html",
    styleUrls:['../../assets/stylesheets/styles.css']
})
export class PaginationComponent{
items;
pageSize=10;
paging:Number[]=[];
constructor(private el: ElementRef,private render:Renderer){
 for (var i = 0; i < this.pageSize; i++) {
      this.paging[i]=i;
    }
}
 pageChanged(pageNumber,value){
        console.log('Page # ='+pageNumber +"..."+JSON.stringify(value));
         this.render.setElementStyle(this.el.nativeElement,'active','true');
    }
}
import {Component,ElementRef,Renderer,Input,OnInit} from '@angular/core'
@Component({
    selector:'pagination',
    templateUrl:"./pagination.component.html",
    styleUrls:['../../assets/stylesheets/styles.css']
})
export class PaginationComponent implements OnInit{
@Input() items;
@Input() pageSize;
constructor(private el: ElementRef,private render:Renderer){
    console.log('Pagination :: Items Obtained ='+this.items);
 
}
ngOnInit(){
     console.log('Pagination :: Items Obtained ='+this.items);
}
 pageChanged(pageNumber,value){
        console.log('Page # ='+pageNumber +"..."+JSON.stringify(value));
         this.render.setElementStyle(this.el.nativeElement,'active','true');
    }
}
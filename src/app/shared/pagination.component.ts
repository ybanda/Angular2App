import {Component,
        ElementRef,
        Renderer,
        Input,Output,EventEmitter,
        OnChanges} from '@angular/core'

@Component({
    selector:'pagination',
    templateUrl:"./pagination.component.html",
    styleUrls:['../../assets/stylesheets/styles.css']
})
export class PaginationComponent implements OnChanges{
    @Input() items;
    @Input() pageSize;
    @Output() pageChange = new EventEmitter();
    currentPage=1;
    pages;
    constructor(private el: ElementRef,private render:Renderer){
        console.log('Pagination :: Items Obtained ='+this.items);
    }

    ngOnChanges(){
        this.currentPage=1;
        this.items
    }
    
    pageChanged(pageNumber,value){
        console.log('Page # ='+pageNumber +"..."+JSON.stringify(value));
        //this.render.setElementStyle(this.el.nativeElement,'active','true');
        this.currentPage =pageNumber;
        this.pageChange.emit(pageNumber);
    }
}
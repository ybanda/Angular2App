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
    
    pageChanged(pageValue){
        console.log('Page # ='+JSON.stringify(pageValue) );
        //this.render.setElementStyle(this.el.nativeElement,'active','true');
        this.currentPage =pageValue.id;
        this.pageChange.emit(pageValue);
    }
    next(){
            if (this.currentPage == this.items.length)
			    return; 
		
		this.currentPage++;
		this.pageChange.emit(this.currentPage);
    }
    previous(){
        if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.pageChange.emit(this.currentPage);
    }
}
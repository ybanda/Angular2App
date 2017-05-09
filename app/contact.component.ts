import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params,CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Component({
    templateUrl: '/app/html/contact.component.html'
})
export class ContactComponent implements CanDeactivate<CanComponentDeactivate> {
    
    constructor(private router:Router){

    }
    onSubmit(form){
        console.log(form);
        this.router.navigate(['albums']);
    }
    
    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
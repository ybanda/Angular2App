import {Component} from '@angular/core';
import {Router,ActivatedRoute,Params,CanDeactivate} from '@angular/router';
import {Observable}  from 'rxjs/Observable';
import {FormGroup} from '@angular/forms';

//import {FormComponent} from '../prevent-unsaved-changes-guard.service';
// export interface CanComponentDeactivate {
//  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }
@Component({
   templateUrl: './contact.component.html'
})
export class ContactComponent{
// implements FormComponent {
    //implements CanDeactivate<CanComponentDeactivate> {
   // form:FormGroup;
    constructor(private router:Router){

    }
    onSubmit(form){
        console.log(form);
        this.router.navigate(['album',2]);
    }
    
    // canDeactivate(component: CanComponentDeactivate) {
    //     return component.canDeactivate ? component.canDeactivate() : true;
    // }
}
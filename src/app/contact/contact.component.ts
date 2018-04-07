import { Component, OnInit, Input } from '@angular/core';
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
export class ContactComponent implements OnInit{
// implements FormComponent {
    //implements CanDeactivate<CanComponentDeactivate> {
   // form:FormGroup;
    constructor(private router:Router , private activatedRoute : ActivatedRoute){

    }
    
name:string;
comment:string;
    ngOnInit(){
        console.log('Inside of Contact Component - ng On Init');
        this.activatedRoute.paramMap.subscribe(
            params=>{
            this.name =params.get('username');
            this.comment = params.get('id');
            console.log('UserName ='+this.name +
        'Id = '+this.comment);
            }
        );
    }
    onSubmit(form){
        
        console.log(form);
        this.router.navigate(['album',2]);
    }
    
    // canDeactivate(component: CanComponentDeactivate) {
    //     return component.canDeactivate ? component.canDeactivate() : true;
    // }
    testUsername(value){
        console.log('testUsername'+value);
    }
}
import {CanDeactivate} from '@angular/router';
import {ContactComponent} from './contact/contact.component'
import {FormControl,FormGroup} from '@angular/forms';
export interface FormComponent{
    form :FormGroup;    
}
export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent>{

canDeactivate(component :FormComponent){
    if(!component.form.dirty)
         return confirm("Are you sure?");

    return true;
}
}
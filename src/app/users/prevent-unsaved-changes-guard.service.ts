import {CanDeactivate} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

export interface FormComponent{
    userForm : FormGroup;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent>{

canDeactivate(component : FormComponent){
    if (!component.userForm.dirty)
         return confirm('Are you sure you want to cancel the current request ?');

    return true;
}
}
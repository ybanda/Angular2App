import {Component} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from './../shared/validators/usernameValidators';

@Component({
    selector:'new-course-form',
    styleUrls:[''],
    templateUrl:'./new-course-form.component.html'
})
export class NewCourseFormComponent{
    
    // Can be created like this.
    
    // form = new FormGroup({
    //     username:new FormControl('',Validators.required),
    //     password: new FormControl('',Validators.required)
    // });

    // (OR)

    constructor(fb:FormBuilder){
        this.form = fb.group({
                username:['',Validators.compose(
                            [Validators.required, 
                            UsernameValidators.cannotContainSpace,
                            UsernameValidators.shouldBeUnique])],
                password:['',Validators.required]
            })
        }

    //( OR )

    form = new FormGroup({
        topics: new FormArray([])
    });

    addTopic(topic:HTMLInputElement){

    }
}

import {Component} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'new-course-form',
    templateUrl: './new-course-form.component.html'
})
export class NewCourseFormComponent{

    // Can be created like this.

    // form = new FormGroup({
    //     username:new FormControl('',Validators.required),
    //     password: new FormControl('',Validators.required)
    // });

    // (OR)

    // constructor(fb:FormBuilder){
    //     this.form = fb.group({
    //             username:['',Validators.compose(
    //                         [Validators.required,
    //                         UsernameValidators.cannotContainSpace,
    //                         UsernameValidators.shouldBeUnique])],
    //             password:['',Validators.required]
    //         })
    //     }

    //( OR )

    form = new FormGroup({
        topics: new FormArray([])
    });

    addTopic(topic: HTMLInputElement){

        (this.form.get('topics') as FormArray).push(new FormControl(topic.value));

    }
    get formData(){
        return <FormArray>this.form.get('topics');
    }
}

import {Component} from '@angular/core';
@Component({
    selector:'subscription-form',
    templateUrl:'./subscription-form.component.html'
    ,styleUrls:['../../styles/styles.css']
})
export class SubscriptionFormComponent{
    submitForm(form){
        console.log(form);
        console.log('Form Submitted Data ::\n'+ 
                    '\nEmail='+form.value.email+
                    '\nName='+form.value.fullName+
                    '\nFrequency='+form.value.frequency);
    }
    log(x){
        console.log(x);
    }
}
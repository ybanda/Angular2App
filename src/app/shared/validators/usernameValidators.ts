import { FormControl, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors|null{
        if(control.value.indexOf(' ')>=0)
            return {cannotContainSpace:true};
        /*
        return {minLength:{
            requiredLength:10,
            actualLength:control.value.length
        }}
        */
      
    }
   //static shouldBeUnique(control:FormControl){
     static shouldBeUnique(control:FormControl):Promise<ValidationErrors>|null{
        return new Promise((resolve,reject) => {
            setTimeout(function(){
               if(control.value=="yash")
                    resolve({shouldBeUnique:true});
                else
                    resolve(null);
            },1);
    });

    // setTimeout(()=>{

    // },200);
}
}
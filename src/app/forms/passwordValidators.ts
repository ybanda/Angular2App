import {FormControl,FormGroup} from '@angular/forms';
export class PasswordValidator{

    static passwordMatch(control:FormGroup){
        console.log(control);
        let newValue =control.root.root.get('newPassword')==null?"":control.root.root.get('newPassword').value;
              if(control.value!=newValue){
                    return {
                      passwordMatch:true
                    }
                  }

                    return null;

    }
    static minimumLengthValidate(control:FormControl){
        console.log(control.value); 

        if(control.value.length<5){
            return {
                minimumLengthValidate:true,
                minLength:5
            }
        }
    return null;
    }

}
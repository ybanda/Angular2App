import {FormControl} from '@angular/forms';
import {isNumeric} from 'rxjs/util/isNumeric';
export class NumberValidator{
    static mustbeValidPhoneNumber(control: FormControl){
        console.log(control + '\n' + isNaN(control.value));
        if (control.value.length != 10 || isNaN(control.value))
            return {mustbeValidPhoneNumber: true};

        return null;
    }
    static mustbeValidZipCode(control: FormControl){
        if (control.value.length != 5 || isNaN(control.value))
            return {mustbeValidZipCode: true};

        return null;
    }
}
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor() { }

    isInputValid(value: any, validation: string) {
        let options = validation.split(',');
        let valid = true;
        for (let x = 0; x < options.length; x++) {
            if (!this.isValid(value, options[x])) {
                valid = false;
                break;
            }
        }
        return valid;
    }

    isValid(value, option) {

        switch (option) {
            case 'required':
                return this.isValidRequired(value);
            case 'email':
                return this.isValidEmail(value);

        }
    }

    isValidRequired(value) {
        return value.trim().length > 0;
    }

    isValidEmail(value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true
        }
        return false
    }
    
}

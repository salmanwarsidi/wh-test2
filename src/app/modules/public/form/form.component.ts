import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/public';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

    email: string = '';
    name: string = '';
    amount: string = '';
    error: any = {};

    constructor(
        public dataSvc: DataService
    ) { }

    ngOnInit() {
    }

    reset() {
        this.email = '';
        this.name = '';
        this.amount = '';
        this.error = {};
    }

    isValid() {
        let valid = true;
        const errors = Object.keys(this.error);
        for (let x = 0; x < errors.length; x++) {
            if (this.error[errors[x]]) {
                valid = false;
                break;
            }
        }
        return valid;
    }

    save() {
        if (!this.isValid()) {
            alert('Form error. Please fill all required fields correctly.');
            return false;
        }
        this.dataSvc.add({
            name: this.name,
            email: this.email,
            amount: parseFloat(this.amount)
        });
        alert('Record added.');
        this.reset();
        return true;
    }

}

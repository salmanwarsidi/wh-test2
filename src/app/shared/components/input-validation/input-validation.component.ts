import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ValidationService } from '@app/shared/services/validation.service';

@Component({
    selector: 'input-validation-errors',
    templateUrl: './input-validation.component.html',
    styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit, OnChanges {

    @Input() value: any;
    @Input() options: string;
    @Output() validate = new EventEmitter();

    error: any = {};
    isValid: boolean = true;

    constructor(
        private validationSvc: ValidationService
    ) { }

    ngOnInit() { }

    validateValue() {
        this.error = {};
        this.isValid = true;

        let options = this.options.split(',');
        for (let x = 0; x < options.length; x++) {
            if (!this.validationSvc.isValid(this.value, options[x])) {
                this.error[options[x]] = true;
                this.isValid = false;
            }
        }
        this.validate.emit(!this.isValid);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.validateValue();
    }

}

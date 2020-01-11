import { Component, OnInit, Input, ContentChild, HostBinding, AfterViewInit } from '@angular/core';
import { IconInputRefDirective } from '@app/shared/directives/icon-input-ref.directive';

@Component({
    selector: 'icon-input',
    templateUrl: './icon-input.component.html',
    styleUrls: ['./icon-input.component.scss']
})
export class IconInputComponent implements OnInit, AfterViewInit {

    constructor() { }

    @Input() icon: string;

    // @Input() value: string;

    @ContentChild(IconInputRefDirective, { static: true })
    input: IconInputRefDirective;

    ngOnInit() { }

    ngAfterViewInit() { }

    @HostBinding("class.focus")
    get focus() {
        return this.input ? this.input.focus : false;
    }

    get classes() {
        const cssClasses = {
            fa: true
        };
        cssClasses['fa-' + this.icon] = true;
        return cssClasses;
    }

}

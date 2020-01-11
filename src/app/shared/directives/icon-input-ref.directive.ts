import { Directive, HostListener, Input, ElementRef, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
    selector: '[iconInputRef]'
})
export class IconInputRefDirective implements OnInit, OnChanges {

    @Input() value: string;
    @Output() valueChange = new EventEmitter();

    private el: HTMLInputElement;

    constructor(
        private elementRef: ElementRef,
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.value.firstChange && changes.value.currentValue == "") {
            this.el.value = "";
        }
    }

    ngOnInit() {
        this.el.value = this.value;
    }

    focus = false;

    @HostListener("input", ['$event'])
    onChange(event) {
        this.valueChange.emit(event.target.value);
    }

    @HostListener("focus")
    onFocus() {
        this.focus = true;
    }

    @HostListener("blur")
    onBlur() {
        this.focus = false;
    }

}

import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { UsdCurrencyPipe } from '../pipes/usd-currency.pipe';

@Directive({
    selector: '[usdCurrencyFormatter]'
})
export class UsdCurrencyDirective implements OnInit {

    private el: HTMLInputElement;

    constructor(
        private elementRef: ElementRef,
        private usdCurrencyPipe: UsdCurrencyPipe
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.value = this.usdCurrencyPipe.transform(this.el.value);
    }

    @HostListener("focus", ["$event.target.value"])
    onFocus(value) {
        this.el.value = this.usdCurrencyPipe.parse(value); // opossite of transform
    }

    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
        this.el.value = this.usdCurrencyPipe.transform(value);
    }

    @HostListener('input', ['$event'])
    onInputChange(event) {
        const initalValue = this.el.value;
        this.el.value = initalValue.replace(/[^0-9.]*/g, '');
        if (initalValue !== this.el.value) {
            event.stopPropagation();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        event.preventDefault();
        const pastedInput: string = event.clipboardData
            .getData('text/plain')
            .replace(/\D/g, '');
        document.execCommand('insertText', false, pastedInput);
    }

    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
        event.preventDefault();
        const textData = event.dataTransfer
            .getData('text').replace(/\D/g, '');
        this.el.focus();
        document.execCommand('insertText', false, textData);
    }

}

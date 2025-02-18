import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[sixDigit]',
    standalone: true
})

export class SixDigitDirective {
    constructor(private el: ElementRef) {}

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const inputValue = this.el.nativeElement.value;

        if (
            [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ].indexOf(event.key) !== -1
        ) {
            return;
        }

        if (inputValue.length >= 6){
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
        const clipboardData = event.clipboardData || (window as any).clipboardData;
        const pastedText = clipboardData?.getData('text') ?? '';

        if(pastedText.length >= 6) {
            event.preventDefault();
        }
    }
}
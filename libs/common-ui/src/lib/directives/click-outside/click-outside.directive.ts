import { Directive, HostListener, ElementRef, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[clickOutsideDirective]',
}) export class ClickOutSideDirective  {

    @Output() clickedOutside = new EventEmitter<void>();

    constructor(private _elementRef: ElementRef) {
    }
    // how do we build a click outside directive. 
    // we keep track of what we are clicking and see if it matches 
    @HostListener('document:click', ['$event.target']) 
    onClick(targetElement: ElementRef) {
        // make sure what we clicked is inside the directive added element.
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if(!clickedInside) {
            this.clickedOutside.emit();
        }
    }
}
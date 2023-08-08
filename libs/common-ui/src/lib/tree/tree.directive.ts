import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";
import { Renderer2 } from "@angular/core";

@Directive({
    selector: '[nodeToggle]'
}) export class NodeToggleDirective implements AfterViewInit {
    constructor(private el: ElementRef, private render: Renderer2) { }

    @Input() expanded: boolean = false;

    @HostBinding('class.vis-hidden')
    get isExpanded() {
        return this.expanded;
    }

    @HostListener('click', ['$event'])
    toggle (event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.expanded = !this.expanded;
    }

    ngAfterViewInit(): void {
        
    }
}
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentRef, Directive, ElementRef, HostListener, Inject, Injector, Input, ViewContainerRef } from '@angular/core';
import {TooltipComponent } from './tooltip.component'

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input() tooltipText = '';
  private tooltipComponent?: ComponentRef<any>;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if(this.tooltipComponent) {
      return;
    }
    this.tooltipComponent = this.ViewContainerRef.createComponent(TooltipComponent);
    this.setTooltipComponentProperties();
  }

  @HostListener('mouseleave')
  onMouseLeaver(): void {
    if(!this.tooltipComponent) {
      return;
    }
    this.appRef.detachView(this.tooltipComponent.hostView);
    this.tooltipComponent.destroy();
    this.tooltipComponent = undefined;
  }

  private setTooltipComponentProperties() {

    if(!this.tooltipComponent) {
      return;
    }
    this.tooltipComponent.instance.text = this.tooltipText;
    const {
      left, right, bottom
    } = this.elementRef.nativeElement.getBoundingClientRect();
    this.tooltipComponent.instance.left = (right - left) / 2 + left;
    this.tooltipComponent.instance.top = bottom;
  }

  constructor(
    private appRef: ApplicationRef,
    private elementRef: ElementRef,
    private ViewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document
  ) {}
}

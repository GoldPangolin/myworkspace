import { Directive, ApplicationRef, ElementRef, HostListener, ViewContainerRef, ComponentRef } from '@angular/core';
import { MenuComponent } from './menu.component';

@Directive({ selector: '[menuButton]' })
export class MenuDirective {
    private menuComponent?: ComponentRef<MenuComponent>

    constructor(
        private applictionRef: ApplicationRef,
        private elRef: ElementRef,
        private viewRef: ViewContainerRef
    ){ }

    @HostListener('click')
    showMenu(): void
    {
        if(this.menuComponent) {
            return;
        }
        this.menuComponent = this.viewRef.createComponent(MenuComponent);
        this.setMenuComponentProperties()
    }

    closeMenu() {
        if(!this.menuComponent) {
            return;
        }
        this.applictionRef.detachView(this.menuComponent.hostView);
        this.menuComponent.destroy;
        this.menuComponent = undefined

    }

    private setMenuComponentProperties() {
        if(!this.menuComponent) {
          return;
        }
        const {
          left, right, bottom
        } = this.elRef.nativeElement.getBoundingClientRect();
        this.menuComponent.instance.left = (right - left) / 2 + left;
        this.menuComponent.instance.top = bottom;
      }
}
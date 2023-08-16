/** this isn't the way I want to import this. think I need to turn those animations into a module */
import { Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { NavigationItem } from './navigation.types';
import { SuperDuperAnimationsModule } from 'libs/common-ui/src/lib/animations/animations.module';
import { defaultNavigation } from './mock-data/data';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';
@Component({
  selector: 'side-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [SuperDuperAnimationsModule.animations]
})
export class NavigationComponent {
  mainNavigation: NavigationItem[] = [];
  asideNavigation?: NavigationItem | NavigationItem[];
  activeAsideItem: NavigationItem | undefined;

  private player?: AnimationPlayer;
  private overlay?: HTMLElement;
  private readonly _handleOverlayClick: any;

  constructor(
    private animationBuilder: AnimationBuilder,
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
      this.mainNavigation = defaultNavigation;
      this._handleOverlayClick = (): void =>
      {
          this.close();
      };
  }

  selectMainNavItem(item : NavigationItem) {
    this.activeAsideItem = item;
    this.showOverlay();
  }
  
  trackByFn(item: NavigationItem) {
    return item.id;
  }

  close(): void {
    //hoestly don't understand how this overlay is getting set to undefined
    console.log(this.overlay);
    if(!this.overlay) {
      return;
    } 
    this.player = this.animationBuilder.build([
      animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: 0.2})),
    ]).create(this.overlay);
    this.player.play();

    this.activeAsideItem = undefined;
    this.overlay?.parentNode?.removeChild(this.overlay);

    this.overlay = undefined;

  }

  showOverlay(): void {
    // check if overlay already exists.
    if (this.overlay) {
      return;
    }
    // create the overlay element
    this.overlay = this.renderer.createElement('div');
    this.overlay?.classList.add('navigation-overlay');
    // append overlay to specific location.
    this.renderer.appendChild(this.elementRef.nativeElement.parentElement, this.overlay);
    this.player = this.animationBuilder.build([
      animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({opacity: .2})),
    ]).create(this.overlay);
    this.player.play();
    // add event listener to it so that it closes the side panel.
    this.overlay?.addEventListener('click', this._handleOverlayClick);
  }

}

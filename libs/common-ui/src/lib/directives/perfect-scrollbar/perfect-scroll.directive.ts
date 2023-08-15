import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';
// https://perfectscrollbar.com/how-to-use.html
import{ BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { ScrollbarGeometry, ScrollbarPosition } from './perfect-scroll.types';
import  { merge }  from  'lodash';

@Directive({
  selector: '[perfectScroll]',
  exportAs: 'perfectScrollBar',
  standalone: true
})
export class PerfectScrollDirective implements OnChanges, OnInit, OnDestroy {

  static ngAcceptInputType_perfectScrollbar: BooleanInput;

  @Input() perfectScrollbar: boolean = true;
  @Input() perfectScrollOptions?: PerfectScrollbar.Options;

  private _animation?: number | null;
  private _options?: PerfectScrollbar.Options;
  private _ps?: PerfectScrollbar | null;
  private _unsubscribeAll: Subject<any>= new Subject<any>();
  
  constructor(
    private _elementRef: ElementRef,
    private _platform: Platform,
    private _router:  Router
    ) {}

  get elementRef(): ElementRef
  {
    return this._elementRef;
  }

  get ps(): PerfectScrollbar | null | undefined
  {
    return this._ps;
  }
  /**
   * On Changes
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
      if('perfectScrollbar' in changes) {
        this.perfectScrollbar = coerceBooleanProperty(changes['perfectScrollbar'].currentValue)
        if(this.perfectScrollbar) {
          this._init();
        } else {
          this._destroy();
        }
      }
      if('perfectScrollBarOptions' in changes) {
        this._options = merge({}, this._options, changes['perfectScrollbar'].currentValue);
        
        if (!this._ps) {
          return;
        }

        setTimeout(()=> {
          this._destroy();
        });
        setTimeout(()=> {
          this._init();
        })
      }
  }

  /** On Init */
  ngOnInit(): void {
      //subscribe to window resize event
      fromEvent(window, 'resize')
        .pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(150),
        ).subscribe(()=> {
          this.update();
        })
  }

  ngOnDestroy(): void {
      this._destroy();
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  isEnabled(): boolean
  {
    return this.perfectScrollbar;
  }

  update(): void
  {
    if(!this._ps) {
      return;
    }
    this._ps.update();
  }

  destroy(): void 
  {
    this.ngOnDestroy();
  }

  /**
   * Returns the Geometry of the Scrollbar
   * 
   * @param prefix
   * @returns 
   */
  geometry(prefix:string ='scroll'): ScrollbarGeometry
  {
    return new ScrollbarGeometry(
      this._elementRef.nativeElement[prefix + 'Left'],
      this._elementRef.nativeElement[prefix + 'Top'],
      this._elementRef.nativeElement[prefix + 'Width'],
      this._elementRef.nativeElement[prefix+ 'Height']
    );
  }

  /**
   * Returns the position of the scrollable element
   * 
   * @param absolute 
   */
  position(absolute:boolean = false): ScrollbarPosition
  {
    let scrollbarPosition;
    if(!absolute && this._ps){
      scrollbarPosition = new ScrollbarPosition(
        this._ps.reach.x || 0,
        this._ps.reach.y || 0,
      )
    } else {
      scrollbarPosition = new ScrollbarPosition(
        this._elementRef.nativeElement.scrollLeft,
        this._elementRef.nativeElement.scrollTop,
      )
    }
    return scrollbarPosition;
  }

      /**
     * Scroll to
     *
     * @param x
     * @param y
     * @param speed
     */
      scrollTo(x: number, y?: number, speed?: number): void
      {
          if ( y == null && speed == null )
          {
              this.animateScrolling('scrollTop', x, speed);
          }
          else
          {
              if ( x != null )
              {
                  this.animateScrolling('scrollLeft', x, speed);
              }
  
              if ( y != null )
              {
                  this.animateScrolling('scrollTop', y, speed);
              }
          }
      }


    /**
     * Scroll to X
     *
     * @param x
     * @param speed
     */
    scrollToX(x: number, speed?: number): void
    {
        this.animateScrolling('scrollLeft', x, speed);
    }

    /**
     * Scroll to Y
     *
     * @param y
     * @param speed
     */
    scrollToY(y: number, speed?: number): void
    {
        this.animateScrolling('scrollTop', y, speed);
    }

    /**
     * Scroll to top
     *
     * @param offset
     * @param speed
     */
    scrollToTop(offset: number = 0, speed?: number): void
    {
        this.animateScrolling('scrollTop', offset, speed);
    }

        /**
     * Scroll to element
     *
     * @param qs
     * @param offset
     * @param ignoreVisible If true, scrollToElement won't happen if element is already inside the current viewport
     * @param speed
     */
        scrollToElement(qs: string, offset: number = 0, ignoreVisible: boolean = false, speed?: number): void
        {
            const element = this._elementRef.nativeElement.querySelector(qs);
    
            if ( !element )
            {
                return;
            }
    
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this._elementRef.nativeElement.getBoundingClientRect();
    
            if ( this._elementRef.nativeElement.classList.contains('ps--active-x') )
            {
                if ( ignoreVisible && elementPos.right <= (scrollerPos.right - Math.abs(offset)) )
                {
                    return;
                }
    
                const currentPos = this._elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
    
                this.animateScrolling('scrollLeft', position + offset, speed);
            }
    
            if ( this._elementRef.nativeElement.classList.contains('ps--active-y') )
            {
                if ( ignoreVisible && elementPos.bottom <= (scrollerPos.bottom - Math.abs(offset)) )
                {
                    return;
                }
    
                const currentPos = this._elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
    
                this.animateScrolling('scrollTop', position + offset, speed);
            }
        }

            /**
     * Animate scrolling
     *
     * @param target
     * @param value
     * @param speed
     */
    animateScrolling(target: string, value: number, speed?: number): void
    {
        if ( this._animation )
        {
            window.cancelAnimationFrame(this._animation);
            this._animation = null;
        }

        if ( !speed || typeof window === 'undefined' )
        {
            this._elementRef.nativeElement[target] = value;
        }
        else if ( value !== this._elementRef.nativeElement[target] )
        {
            let newValue = 0;
            let scrollCount = 0;

            let oldTimestamp = performance.now();
            let oldValue = this._elementRef.nativeElement[target];

            const cosParameter = (oldValue - value) / 2;

            const step = (newTimestamp: number): void =>
            {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));

                // Only continue animation if scroll position has not changed
                if ( this._elementRef.nativeElement[target] === oldValue )
                {
                    if ( scrollCount >= Math.PI )
                    {
                        this.animateScrolling(target, value, 0);
                    }
                    else
                    {
                        this._elementRef.nativeElement[target] = newValue;

                        // On a zoomed out page the resulting offset may differ
                        oldValue = this._elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;

                        this._animation = window.requestAnimationFrame(step);
                    }
                }
            };

            window.requestAnimationFrame(step);
        }
    }

        // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        // Return if already initialized
        if ( this._ps )
        {
            return;
        }

        // Return if on mobile or not on browser
        if ( this._platform.ANDROID || this._platform.IOS || !this._platform.isBrowser )
        {
            this.perfectScrollbar = false;
            return;
        }

        // Initialize the PerfectScrollbar
        this._ps = new PerfectScrollbar(this._elementRef.nativeElement, {...this._options});
    }

    /**
     * Destroy
     *
     * @private
     */
    private _destroy(): void
    {
        // Return if not initialized
        if ( !this._ps )
        {
            return;
        }

        // Destroy the PerfectScrollbar
        this._ps.destroy();

        // Clean up
        this._ps = null;
    }


}

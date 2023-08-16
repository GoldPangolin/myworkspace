import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationItem } from '../../navigation.types';
import { SuperDuperAnimationsModule } from 'libs/common-ui/src/lib/animations/animations.module';

@Component({
    selector       : 'collapsable-nav-item',
    templateUrl    : './collapsable.component.html',
    animations     : [SuperDuperAnimationsModule.animations],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCollapsableItemComponent implements OnInit, OnDestroy
{

    @Input() autoCollapse?: boolean;
    @Input() item?: NavigationItem;
    @Input() name?: string;

    isCollapsed: boolean = true;
    isExpanded: boolean = false;


    /**
     * Constructor
     */
    constructor(
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        /* eslint-disable @typescript-eslint/naming-convention */
        return {
            'navigation-item-collapsed': this.isCollapsed,
            'navigation-item-expanded' : this.isExpanded,
        };
        /* eslint-enable @typescript-eslint/naming-convention */
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapse
     */
    collapse(): void
    {
    }

    /**
     * Expand
     */
    expand(): void
    {

    }

    /**
     * Toggle collapsable
     */
    toggleCollapsable(): void
    {
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }


}

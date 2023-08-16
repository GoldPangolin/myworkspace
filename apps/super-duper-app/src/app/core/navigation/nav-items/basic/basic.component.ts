import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationItem } from '../../navigation.types';

@Component({
    selector       : 'basic-nav-item',
    templateUrl    : './basic.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item?: NavigationItem;
    @Input() name?: string;

    /**
     * Constructor
     */
    constructor(
    )
    {

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
}

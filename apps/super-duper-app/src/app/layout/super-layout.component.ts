import { closeSidenav } from './actions/layout.actions';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Store } from "@ngrx/store";
// import { Observable, tap } from "rxjs";
// import * as fromRoot from '../root-reducer/index';
// import { LayoutActions } from "./actions";
@Component({
    selector: 'super-layout',
    templateUrl: './super-layout.component.html',
    styleUrls: ['./super-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
    ]
}) export class SuperLayoutComponent implements OnInit, OnDestroy {
    spOpen = true;
    // showSidenav$: Observable<boolean>
    constructor(
        // private store: Store
        ){
        // this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav)
    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        
    }

    toggleSideNav() {
        this.spOpen = !this.spOpen;
        // this.showSidenav$.pipe(
        //     tap((boolean)=> console.log('stream')
        //     ),
        //     tap((boolean:boolean)=> boolean ? this.store.dispatch(LayoutActions.closeSidenav()) : this.store.dispatch(LayoutActions.openSidenav())))
    }
}
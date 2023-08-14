import { NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'super-layout',
    templateUrl: './super-layout.component.ts',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgIf, RouterOutlet]
}) export class SuperLayoutComponent implements OnInit, OnDestroy {
    constructor(){

    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        
    }
}
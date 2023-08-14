import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { clickOutSideDirective } from "./click-outside.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        clickOutSideDirective
    ],
    exports: [
        clickOutSideDirective
    ]
}) export class ClickOutsideDirectiveModule {

}
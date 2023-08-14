import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClickOutSideDirective } from "./click-outside.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ClickOutSideDirective
    ],
    exports: [
        ClickOutSideDirective
    ]
}) export class ClickOutsideDirectiveModule {

}
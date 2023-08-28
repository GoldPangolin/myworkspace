import { NgModule } from "@angular/core";
import { superDuperAnimations } from "./public-api";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
    imports: [BrowserAnimationsModule],
    declarations: [],
    exports: []
}) export class SuperDuperAnimationsModule{
    static animations = superDuperAnimations;
}
import { NgModule } from "@angular/core";
import { NavigationBasicItemComponent } from "./nav-items/basic/basic.component";
import { NavigationComponent } from "./navigation.component";
import { NavigationCollapsableItemComponent } from "./nav-items/collapsable/collapsable.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";


export const NAV_COMPONENTS = [
    NavigationBasicItemComponent,
    NavigationCollapsableItemComponent,
    NavigationComponent
]
@NgModule({
    imports:[
        CommonModule, 
        MatIconModule
    ],
    declarations: [
        NAV_COMPONENTS
    ],
    exports: [
        NAV_COMPONENTS
    ]
}) export class NavigationModule {

}
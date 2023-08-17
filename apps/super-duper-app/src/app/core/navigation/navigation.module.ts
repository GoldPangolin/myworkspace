import { NgModule } from "@angular/core";
import { NavigationBasicItemComponent } from "./nav-items/basic/basic.component";
import { NavigationComponent } from "./navigation.component";
import { NavigationCollapsableItemComponent } from "./nav-items/collapsable/collapsable.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { DividerComponent } from "./nav-items/divider/divider.component";


export const NAV_COMPONENTS = [
    NavigationBasicItemComponent,
    NavigationCollapsableItemComponent,
    NavigationComponent,
    DividerComponent
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
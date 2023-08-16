import { NgModule } from "@angular/core";
import { NavigationBasicItemComponent } from "./nav-items/basic/basic.component";
import { NavigationComponent } from "./navigation.component";
import { NavigationCollapsableItemComponent } from "./nav-items/collapsable/collapsable.component";
import { CommonModule } from "@angular/common";


export const NAV_COMPONENTS = [
    NavigationBasicItemComponent,
    NavigationCollapsableItemComponent,
    NavigationComponent
]
@NgModule({
    imports:[CommonModule],
    declarations: [
        NAV_COMPONENTS
    ],
    exports: [
        NAV_COMPONENTS
    ]
}) export class NavigationModule {

}
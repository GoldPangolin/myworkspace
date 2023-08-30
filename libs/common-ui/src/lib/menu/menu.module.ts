import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuDirective } from "./menu.directive";
import { MenuComponent } from "./menu.component";

@NgModule({
    imports: [CommonModule],
    declarations: [MenuDirective, MenuComponent],
    exports: [MenuComponent, MenuDirective],
    providers: []
}) export class MenuModule {}
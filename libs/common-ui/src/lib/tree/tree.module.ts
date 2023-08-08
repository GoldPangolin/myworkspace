import { NgModule } from "@angular/core";
import { TreeComponent } from "./tree.component";
import { NodeToggleDirective } from "./tree.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [TreeComponent, NodeToggleDirective],
    exports: [TreeComponent, NodeToggleDirective],
}) export class TreeModule {}
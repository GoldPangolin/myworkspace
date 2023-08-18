import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms";
import { AdminPanelComponent } from "./admin-panel.component";
import { CommonModule } from "@angular/common";

@NgModule( {
    imports: [FormsModule, CommonModule],
    declarations: [ AdminPanelComponent],
    exports:[AdminPanelComponent]
}) export class AdminPanelModule {

}
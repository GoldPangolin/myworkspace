import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms";
import { AdminPanelComponent } from "./admin-panel.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule( {
    imports: [FormsModule, CommonModule, MatIconModule],
    declarations: [ AdminPanelComponent],
    exports:[AdminPanelComponent]
}) export class AdminPanelModule {

}
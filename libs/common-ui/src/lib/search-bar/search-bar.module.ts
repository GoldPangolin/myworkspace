import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchBarComponent } from "./search-bar.component";
@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [SearchBarComponent],
    providers: [],
    exports: [SearchBarComponent],
}) export class SearchBarModule {

}
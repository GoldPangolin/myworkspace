import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchBarComponent } from "./search-bar.component";
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [SearchBarComponent],
    providers: [],
    exports: [SearchBarComponent],
}) export class SearchBarModule {

}
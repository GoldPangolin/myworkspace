import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchBarComponent } from "./search-bar.component";
import { SelectModule } from '../select/select.module';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SelectModule,
    ],
    declarations: [SearchBarComponent],
    providers: [],
    exports: [SearchBarComponent],
}) export class SearchBarModule {

}
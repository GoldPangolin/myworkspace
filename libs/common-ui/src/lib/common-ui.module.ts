import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TreeModule } from './tree/tree.module';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SelectModule } from './select/select.module';
import { ClickOutsideDirectiveModule } from './directives/click-outside/click-outside.module';

@NgModule({
  imports: [CommonModule, TreeModule, SearchBarModule, SelectModule, ClickOutsideDirectiveModule],
  declarations: [
    BannerComponent,
    TaskComponent,
    TaskListComponent,
  ],
  exports: [BannerComponent, TreeModule, SearchBarModule, SelectModule, ClickOutsideDirectiveModule],
})
export class CommonUiModule {}

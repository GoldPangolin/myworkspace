import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NodeToggleDirective } from './tree/tree.directive';
import { TreeModule } from './tree/tree.module';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  imports: [
    CommonModule, 
    TreeModule,
    SearchBarModule
  ],
  declarations: [
    BannerComponent,
    TaskComponent,
    TaskListComponent,
  ],
  exports: [BannerComponent, TreeModule, SearchBarModule],
})
export class CommonUiModule {}

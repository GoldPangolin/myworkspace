import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NodeToggleDirective } from './tree/tree.directive';
import { TreeModule } from './tree/tree.module';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [CommonModule, TreeModule],
  declarations: [BannerComponent, TaskComponent, TaskListComponent],
  exports: [BannerComponent, TreeModule],
})
export class CommonUiModule {}

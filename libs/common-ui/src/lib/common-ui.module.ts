import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TreeModule } from './tree/tree.module';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SelectModule } from './select/select.module';
import { ClickOutsideDirectiveModule } from './directives/click-outside/click-outside.module';
import { SuperDuperAnimationsModule } from './animations/animations.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    SearchBarModule,
    SelectModule,
    ClickOutsideDirectiveModule,
    SuperDuperAnimationsModule,
    TooltipModule
  ],
  declarations: [
    BannerComponent,
    TaskComponent,
    TaskListComponent,
  ],
  exports: [
    BannerComponent,
    TreeModule,
    SearchBarModule,
    SelectModule,
    SuperDuperAnimationsModule,
    ClickOutsideDirectiveModule,
    TooltipModule,
  ],
})
export class CommonUiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NodeToggleDirective } from './tree/tree.directive';
import { TreeModule } from './tree/tree.module';

@NgModule({
  imports: [CommonModule, TreeModule],
  declarations: [BannerComponent],
  exports: [BannerComponent, TreeModule],
})
export class CommonUiModule {}

/** this isn't the way I want to import this. think I need to turn those animations into a module */
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationItem } from './navigation.types';
import { SuperDuperAnimationsModule } from 'libs/common-ui/src/lib/animations/animations.module';

@Component({
  selector: 'side-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [SuperDuperAnimationsModule.animations]
})
export class NavigationComponent {
  activeAsideItem:boolean = true;
  navigation: NavigationItem[] = [];

  
  trackByFn(item: NavigationItem) {
    return item.id;
  }
}

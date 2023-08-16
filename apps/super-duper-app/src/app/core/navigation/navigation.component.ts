/** this isn't the way I want to import this. think I need to turn those animations into a module */
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationItem } from './navigation.types';
import { SuperDuperAnimationsModule } from 'libs/common-ui/src/lib/animations/animations.module';
import { navigation } from './mock-data/data';
@Component({
  selector: 'side-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [SuperDuperAnimationsModule.animations]
})
export class NavigationComponent {
  activeAsideItem:boolean = true;
  activeItem: NavigationItem | undefined | any = undefined;
  navigation: NavigationItem[] = [];

  constructor() {
    this.navigation = navigation;
    console.log(navigation);
    
  }
  
  trackByFn(item: NavigationItem) {
    return item.id;
  }
}

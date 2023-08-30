import { Component, Input } from '@angular/core';

@Component({
  selector: 'super-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() top?: number;
  @Input() left?: number;
}

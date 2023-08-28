import { Component, Input } from '@angular/core';

@Component({
  selector: 'myworkspace-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() text =  '';
  @Input() left = 0;
  @Input() top = 0;
}

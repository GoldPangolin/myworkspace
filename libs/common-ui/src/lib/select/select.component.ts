import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from './select.model';

@Component({
  selector: 'myworkspace-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input('options') options?: SelectOption[];
  @Output() optionSelectedEvent = new EventEmitter<string>();

  optionSelected(value?: any) {
    this.optionSelectedEvent.emit(value);
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DefaultSearchConfig, SearchBarConfig } from './search-bar.model';
import { AsyncValidator, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'myworkspace-search-bar',
  template: `
    <div [class]="className">
      <label [attr.id]="id"> [attr.aria-label]="label">{{ config?.label ?? 'Search' }}</label>
      <input (keyup.enter)="searchEvent.emit()" formControlName="searchBarControl" [attr.aria-labelledby]="id" placeholder="config.placeholder" type="text" />
    </div>
  `,
  styles: [``],
})
export class SearchBarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  
  @Input('config') config?: SearchBarConfig; 

  @Input('validators') validators ?: ValidatorFn[];
  @Input('asyncValidators') asyncValidators?: AsyncValidator[]; 

  searchBarControl?: FormControl;
   
  get className(): string {
    return `${this.config?.title}-search-wrapper`;
  }

  get id(): string {
    return `${this.config?.id}-search`
  }

  get label(): string {
    return `${this.config?.label}-label`
  }


  constructor() {
  }

  ngOnInit() {
    if(!this.config) {
      this.config = new DefaultSearchConfig;
      console.log(this.config);
    }
    this.searchBarControl = new FormControl( this.config?.placeholder, [this.validators], [this.asyncValidators]);
  }
}

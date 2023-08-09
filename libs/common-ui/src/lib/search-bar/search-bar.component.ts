import { Component, Input, OnInit, Output, EventEmitter, Optional, OnDestroy } from '@angular/core';
import { DefaultSearchConfig, SearchBarConfig } from './search-bar.model';
import {  AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { pipe, of, switchMap, map, tap, Subject, distinctUntilChanged, debounceTime, takeUntil } from 'rxjs';
@Component({
  selector: 'myworkspace-search-bar',
  template: `
    <div class="search-wrapper" [class]="className">
      <label [attr.id]="id" [attr.aria-label]="label"> {{ config?.label ?? 'Search' }} : </label>
      <input (keyup.enter)="submitSearch()" [formControl]="searchBarControl" [attr.aria-labelledby]="id" type="text" />
    </div>
  `,
  styles: [],
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() typeAhead = new EventEmitter<string>();
  
  @Input('config') config?: SearchBarConfig; 

  @Optional()
  @Input('validators') validators ?: ValidatorFn[];
  
  @Optional()
  @Input('asyncValidators') asyncValidators?: AsyncValidatorFn[]; 

  destroyed = new Subject();
  searchBarControl: FormControl = new FormControl('', [], []);
   
  get className(): string {
    return `${this.config?.title}-search-wrapper`;
  }

  get id(): string {
    return `${this.config?.id}-search`
  }

  get label(): string {
    return `${this.config?.label}-label`
  }

  submitSearch() {
    if(this.searchBarControl.valid) {
      console.log('submit search', this.searchBarControl.value);
      this.searchEvent.emit(this.searchBarControl.value);
    }
  }

  constructor() {
    this.searchBarControl.valueChanges.pipe(
      takeUntil(this.destroyed),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(
        tap((val:string)=> {
          this.typeAhead.emit(val);
        }
      ))
    ).subscribe((value) => {
        console.log('subscribed to value:', value)
    })
  }

  ngOnInit() {
    if(!this.config) {
      this.config = new DefaultSearchConfig;
      console.log(this.config);
    }
    if(this.asyncValidators) {
      this.searchBarControl.setAsyncValidators(this.asyncValidators);
    }
    if(this.validators) {
      this.searchBarControl.setValidators(this.validators);
    }
  }

  ngOnDestroy() {
    this.destroyed.next(null);
  }
}

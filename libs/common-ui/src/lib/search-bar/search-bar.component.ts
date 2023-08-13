import { Component, Input, OnInit, Output, EventEmitter, Optional, OnDestroy } from '@angular/core';
import { SearchConfig, SearchBarConfiOptions, TypeAheadResult } from './search-bar.model';
import {  AsyncValidatorFn, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { pipe, of, switchMap, map, tap, Subject, distinctUntilChanged, debounceTime, takeUntil } from 'rxjs';
@Component({
  selector: 'myworkspace-search-bar',
  template: `
    <div class="search-wrapper" [class]="className">
      <div class="search-wrapper_input">
        <label [attr.id]="id" [attr.aria-label]="label"> {{ config?.label ?? 'Search' }} : </label>
        <input (keyup.enter)="submitSearch()" [formControl]="searchBarControl" [attr.aria-labelledby]="id" type="text" />
        <myworkspace-select *ngIf="config?.sortOptions" class="sort-option" [options]="config?.sortOptions"></myworkspace-select>
      </div>
      <ng-container *ngIf="searchBarControl.invalid && searchBarControl.dirty && searchBarControl.touched" [ngTemplateOutlet]="error" [ngTemplateOutletContext]="searchBarControl"]>
      </ng-container>
      <ng-container *ngIf="typeAheadResults" [ngTemplateOutlet]="typeAhead">

      </ng-container>
    </div>

    <ng-template #typeAhead>
      <div class="type-ahead-container">
        <ul class='type-ahead-result' aria-autocomplete="id" perfectScrollDirective>
          <ng-container *ngFor="let result of typeAheadResults">
            <li class="type-ahead-result">
              <!-- <span><icon></span><span *ngIf="result?.expandable" expandDirective @rotate="90">carrot placeholder</span> -->
              <div class="type-ahead-result__title"> {{result.title}}</div>
              <div *ngIf="result.isExpanded" class="expandable-section" perfectScrollDirective>
                  <p *ngIf="result?.expandableContentText">
                    {{result.expandableContentText}}
                  </p>
                  <ng-container *ngIf="result.expandableContent" [ngTemplateOutlet]="result.expandableContent"></ng-container>
              </div>
            </li>
          </ng-container>
        </ul> 
      </div>
    </ng-template>

    <ng-template #error>
        {{searchBarControl.errors}}
        <div *ngFor="let error of searchBarControl.errors | keyvalue" class="error"><p>{{ error.key }} {{ error.value | json }}</p></div>
    </ng-template>
  `,
  styles: [],
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() typeAhead = new EventEmitter<string>();
  
  @Input('config') config?: SearchBarConfiOptions; 

  @Optional()
  @Input('validators') validators ?: ValidatorFn[];
  
  @Optional()
  @Input('asyncValidators') asyncValidators?: AsyncValidatorFn[]; 

  _typeAheadResults?: TypeAheadResult[] | undefined;  
  
  @Optional()
  @Input('typeAheadResults') 
  set typeAheadResults(val: TypeAheadResult[] | undefined) {
    this._typeAheadResults = val;
  }

  get typeAheadResults() {
    return this._typeAheadResults;
  }

  destroyed = new Subject();
  searchBarControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)], []);
   
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
      this.searchEvent.emit(this.searchBarControl.value);
    }
  }

  constructor() {
    this.searchBarControl.valueChanges.pipe(
      takeUntil(this.destroyed),
      distinctUntilChanged(),
      debounceTime(300),
      tap((val: string) => {
        this.typeAhead.emit(val);
      })
    ).subscribe((value) => {
    })
  }

  ngOnInit() {
    if(!this.config) {
      this.config = new SearchConfig({id: undefined, title: undefined, label: undefined, placeholder: undefined});
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

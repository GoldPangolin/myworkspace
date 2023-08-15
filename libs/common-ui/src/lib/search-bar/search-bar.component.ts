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
        <div class="input-wrapper">
          <div class="inline">
            <input (keyup.enter)="submitSearch()" [formControl]="searchBarControl" [attr.aria-labelledby]="id" type="text" />
            <myworkspace-select *ngIf="config?.sortOptions" class="sort-option" [options]="config?.sortOptions"></myworkspace-select>
          </div>
          <ng-container *ngIf="searchBarControl.invalid && searchBarControl.dirty && searchBarControl.touched" [ngTemplateOutlet]="error">
          </ng-container>
          <ng-container *ngIf="typeAheadResults" [ngTemplateOutlet]="typeAhead">
          </ng-container>
        </div>
      </div>

    </div>

    <ng-template #typeAhead>
      <div class="type-ahead-container" perfectScroll clickOutsideDirective (clickedOutside)="closeTypeAhead()">
        <ul class='type-ahead-result' aria-autocomplete="id">
          <ng-container *ngFor="let result of typeAheadResults">
            <li class="type-ahead-result" (click)="selectTypeAheadOption(result)">
              <!-- <span><icon></span><span *ngIf="result?.expandable" expandDirective @rotate="90">carrot placeholder</span> -->
              <div class="type-ahead-result__title"> {{result.title}}</div>
              <div *ngIf="result.isExpanded" class="expandable-section">
                  <ng-container *ngIf="result.expandableContent" [ngTemplateOutlet]="expandableContent" [ngTemplateOutletContext]="result"></ng-container>
              </div>
            </li>
          </ng-container>
        </ul> 
      </div>
    </ng-template>

    <!--  Need to flesh out this a little better -->
    <ng-template #error>
        <!-- Todo add switch for various error types -->
        <div *ngFor="let error of searchBarControl.errors | keyvalue" class="error"><p>{{ error.key }} {{ error.value | json }}</p></div>
    </ng-template>

    <ng-template #expandableContent let-result>
        <div [ngSwitch]="result.expandableContent">
            <div *ngSwitchCase="result?.expanded" expandableContentDirective="true">
            </div>
            <div class="expandable-content-container" 
              *ngSwitchDefault 
              expandableContentDirective="false">
              <p class="expandable-content">{{result.content}}</p>
            </div>
        </div>
    </ng-template>
  `,
  styles: [`
    // this is just temp as I will make this all configuarble styles.
    .search-wrapper {
      display: flex;
      flex-direction: row;
    }
    .type-ahead-container {
      border: 1px solid grey;
      max-height: 200px;
      overflow: scroll;
    }
    .type-ahead-result {
      list-style: none;
    }
  `],
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() typeAhead = new EventEmitter<string>();
  
  @Input('config') config?: SearchBarConfiOptions; 

  @Optional()
  @Input('validators') validators ?: ValidatorFn[];
  
  @Optional()
  @Input('asyncValidators') asyncValidators?: AsyncValidatorFn[]; 

  _typeAheadResults?: TypeAheadResult[] | undefined | null;  
  
  @Optional()
  @Input('typeAheadResults') 
  set typeAheadResults(val: TypeAheadResult[] | undefined | null) {
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

  // this is not a permanet solution. 
  // because it depens if we clicked a link or not.
  selectTypeAheadOption(result: TypeAheadResult) {
    this.searchEvent.emit(result.title)
    this.searchBarControl.setValue(result.title)
    this.typeAheadResults = undefined;
  }

  closeTypeAhead() {
    this._typeAheadResults = undefined;
  }

  constructor() {
    this.searchBarControl.valueChanges.pipe(
      takeUntil(this.destroyed),
      distinctUntilChanged(),
      debounceTime(300),
      tap((val: string) => {
        this._typeAheadResults = [{ title: 'hi'}, {title: 'bye'},{ title: 'hi'}, {title: 'bye'},{ title: 'hi'}, {title: 'bye'},{ title: 'hi'}, {title: 'bye'},{ title: 'hi'}, {title: 'bye'},{ title: 'hi'}, {title: 'bye'}];
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

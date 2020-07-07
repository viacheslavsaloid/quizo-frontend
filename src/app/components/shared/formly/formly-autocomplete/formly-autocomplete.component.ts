import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-formly-autocomplete',
  templateUrl: './formly-autocomplete.component.html',
  styleUrls: ['./formly-autocomplete.component.scss'],
})
export class FormlyAutocompleteComponent extends FieldType implements OnInit, AfterViewInit {
  @ViewChild(MatInput) formFieldControl: MatInput;
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;

  filter: Observable<any>;

  public trackByFn(index, item) {
    return index; // or item.id
  }

  public getDisplayFn = () => (option) => (option ? option.name || option : '');

  ngOnInit() {
    super.ngOnInit();
    this.filter = this.formControl.valueChanges.pipe(
      startWith(''),
      switchMap((term) => this.to.filter(term))
    );
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    (this.autocomplete as any)._formField = this.formField;
  }
}

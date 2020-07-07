import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { FormControl } from '@angular/forms';
import { NgOnDestory$ } from 'app/utils/hooks';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { startWith, takeUntil, distinctUntilChanged, debounceTime, switchMap, map } from 'rxjs/operators';
import { filterData } from 'app/utils/filters';
import { ProductsService } from 'app/services/admin/products/products.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as ru } from './i18n/ru';
import { locale as en } from './i18n/en';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  @ViewChild('table', { static: true }) tableRef: TemplateRef<any>;
  @ViewChild('nameCell', { static: true }) nameCell: TemplateRef<any>;
  @ViewChild('arrowCell', { static: true }) arrowCell: TemplateRef<any>;
  @ViewChild('jobCell', { static: true }) jobCell: TemplateRef<any>;

  public searchInput: FormControl;
  public columns: any[];
  public rows$: any;

  public filterSubject: BehaviorSubject<string>;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _productsService: ProductsService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService
  ) {}

  public onClick() {
    this._productsService.navitageToContact();
  }

  public toggleExpandRow(row) {
    const tableId = 'table';
    this.tableRef[tableId].rowDetail.toggleExpandRow(row);
  }
  ngOnInit(): void {
    this.filterSubject = new BehaviorSubject('');

    this._fuseTranslationLoaderService.loadTranslations(en, ru);

    this.searchInput = new FormControl('');

    const searchedContacts$ = this.searchInput.valueChanges.pipe(
      startWith(''),
      takeUntil(this._ngOnDestroy$),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((e) => this._productsService.getMany$({ filter: { name: e } }))
    );

    const filter$ = this.filterSubject.asObservable();

    // tslint:disable-next-line: deprecation
    this.rows$ = combineLatest(searchedContacts$, filter$).pipe(
      map(([search, filterValue]) => filterData({ data: search, filter: { name: filterValue } }))
    );

    this.columns = [
      { prop: '', name: '', canAutoResize: false, minWidth: 50, width: 50, cellTemplate: this.arrowCell },
      { prop: 'name', name: 'PRODUCTS.NAME' },
      { prop: 'nickname', name: 'PRODUCTS.NICKNAME' },
      { prop: 'phone', name: 'PRODUCTS.PHONE' },
      { prop: 'jobTitle', name: 'PRODUCTS.JOB' },
    ];
  }
}

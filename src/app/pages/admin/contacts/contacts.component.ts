import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ContactsService } from 'app/services/admin';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as ru } from './i18n/ru';
import { locale as en } from './i18n/en';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { Contact } from 'app/models/admin';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, startWith, map } from 'rxjs/operators';
import { NgOnDestory$ } from 'app/utils/hooks';
import { filterData } from 'app/utils/filters';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: fuseAnimations,
})
export class ContactsComponent implements OnInit {
  @ViewChild('table', { static: true }) tableRef: TemplateRef<any>;
  @ViewChild('nameCell', { static: true }) nameCell: TemplateRef<any>;
  @ViewChild('arrowCell', { static: true }) arrowCell: TemplateRef<any>;
  @ViewChild('jobCell', { static: true }) jobCell: TemplateRef<any>;

  public columns: any[];
  public contacts$: Observable<Contact[]>;

  public hasSelectedContacts: boolean;
  public searchInput: FormControl;

  public list: any[];

  public filterSubject: BehaviorSubject<string>;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _contactsService: ContactsService,
    private _fuseSidebarService: FuseSidebarService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService
  ) {}

  public onClick(): void {
    this._contactsService.openModalAndAddOne();
  }

  public toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar('contacts-main-sidebar').toggleOpen();
  }

  public onFilterChange(selected) {
    this.list = this.list.map((item, index) => ({ ...item, active: selected === index }));
    this.filterSubject.next(this.list[selected].filter);
  }

  public onContactClick(contact: Contact) {
    this._contactsService.navitageToContact(contact.id);
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
      switchMap((e) => this._contactsService.getMany$({ filter: { name: e } }))
    );

    const filter$ = this.filterSubject.asObservable();

    // tslint:disable-next-line: deprecation
    this.contacts$ = combineLatest(searchedContacts$, filter$).pipe(
      map(([search, filterValue]) => filterData({ data: search, filter: { name: filterValue } }))
    );

    this.columns = [
      { prop: '', name: '', canAutoResize: false, minWidth: 50, width: 50, cellTemplate: this.arrowCell },
      { prop: 'name', name: 'CONTACTS.NAME', cellTemplate: this.nameCell },
      { prop: 'nickname', name: 'CONTACTS.NICKNAME' },
      { prop: 'phone', name: 'CONTACTS.PHONE' },
      { prop: 'jobTitle', name: 'CONTACTS.JOB', cellTemplate: this.jobCell },
    ];

    this.list = [
      {
        title: 'All Contacts',
        filter: '',
        active: true,
      },
      {
        title: 'Start with ab',
        filter: 'ab',
        active: false,
      },
      {
        title: 'Start with ba',
        filter: 'ba',
        active: false,
      },
    ];
  }
}

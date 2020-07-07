import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/models/admin';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgOnDestory$ } from 'app/utils/hooks';
import { ContactsService } from 'app/services/admin';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { startWith, takeUntil, distinctUntilChanged, debounceTime, switchMap, map } from 'rxjs/operators';
import { filterData } from 'app/utils/filters';
import { locale as ru } from './i18n/ru';
import { locale as en } from './i18n/en';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: fuseAnimations,
})
export class UsersComponent implements OnInit {
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

  public onSort() {}

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

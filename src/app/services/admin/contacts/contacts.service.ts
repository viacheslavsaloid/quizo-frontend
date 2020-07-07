import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService } from '../../root';
import { Contact } from 'src/app/models/admin';
import { ContactsState } from 'src/app/store/states';
import { StateModel } from 'src/app/models/store';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContactsService extends CrudService<Contact> {
  constructor(private _apiService: ApiService, private _contactsState: ContactsState) {
    super(_apiService);
  }

  get url(): string {
    return environment.contactsEndpoint;
  }

  get state(): StateModel<Contact> {
    return this._contactsState;
  }
}

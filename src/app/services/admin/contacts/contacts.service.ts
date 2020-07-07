import { Injectable } from '@angular/core';
import { CrudService } from 'app/utils/services/crud.service';
import { ApiService, PopupService } from 'app/services/root';
import { Contact } from 'app/models/admin';
import { ContactsState } from 'app/store/states/admin';
import { AppState } from 'app/models/store';

import {
  OpenModalFormArgs,
  OpenModalResponse,
  OpenModalAndAddOneResponse,
  PopupAction,
} from 'app/models/components/popup';

import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'app/routes/admin/auth.routes';

@Injectable()
export class ContactsService extends CrudService<Contact> {
  public dialogRef: any;

  constructor(
    _apiService: ApiService,
    private _router: Router,
    private _contactsState: ContactsState,
    private _popupService: PopupService
  ) {
    super(_apiService);
  }

  get url(): string {
    return environment.contactsEndpoint;
  }

  get state(): AppState<Contact> {
    return this._contactsState;
  }

  public navitageToContact(id) {
    this._router.navigate([ADMIN_ROUTES.CONTACT.fullPath.replace(':id', id)]);
  }

  public async openModal(args?: OpenModalFormArgs): OpenModalResponse<Contact> {
    return this._popupService.openModalForm({
      panelClass: 'contact-form-dialog',
      translateTitle: 'CONTACTS.TITLE',
      fields: 'contact',
    });
  }

  public async openModalAndAddOne(): OpenModalAndAddOneResponse<Contact> {
    const res = await this.openModal();

    if (res?.action === PopupAction.SUBMIT) {
      const value = { ...res.data };
      return this.addOne({ value });
    }
  }
}

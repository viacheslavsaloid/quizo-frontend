import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { StateRepository, Computed } from '@ngxs-labs/data/decorators';
import { createEntityCollections } from '@ngxs-labs/data/utils';
import { map } from 'rxjs/operators';
import { Contact } from 'app/models/admin';
import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { AppState } from 'app/models/store';

@StateRepository()
@State({
  name: 'contacts',
  defaults: createEntityCollections(),
})
@Injectable()
export class ContactsState extends NgxsDataEntityCollectionsRepository<Contact> implements AppState<Contact> {
  @Computed()
  public get values$() {
    return this.state$.pipe(map((state) => Object.values(state.entities)));
  }

  @Computed()
  public get values() {
    return Object.values(this.snapshot.entities);
  }
}

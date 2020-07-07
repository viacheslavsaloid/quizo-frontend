import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { createEntityCollections } from '@ngxs-labs/data/utils';
import { User } from 'src/app/models/admin';
import { AppState } from 'src/app/utils/classes/state.class';

const entityCollection = createEntityCollections({
  ids: [0, 1],
  entities: {
    0: {
      id: 0,
      title: 'Name',
      firstName: 'Slava',
      lastName: 'Saloid',
    },
    1: {
      id: 1,
      title: 'Name',
      firstName: 'Alex',
      lastName: 'Saloid',
    },
  },
});

@StateRepository()
@State({
  name: 'users',
  defaults: {
    ...entityCollection,
    total: 0,
  },
})
@Injectable()
export class UsersState extends AppState<User> {}

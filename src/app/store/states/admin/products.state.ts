import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { StateRepository, Computed } from '@ngxs-labs/data/decorators';
import { createEntityCollections } from '@ngxs-labs/data/utils';
import { map } from 'rxjs/operators';
import { Product } from 'app/models/admin';
import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { AppState } from 'app/models/store';

@StateRepository()
@State({
  name: 'products',
  defaults: createEntityCollections(),
})
@Injectable()
export class ProductsState extends NgxsDataEntityCollectionsRepository<Product> implements AppState<Product> {
  @Computed()
  public get values$() {
    return this.state$.pipe(map((state) => Object.values(state.entities)));
  }

  @Computed()
  public get values() {
    return Object.values(this.snapshot.entities);
  }
}

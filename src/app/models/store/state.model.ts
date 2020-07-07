import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { Observable } from 'rxjs';

export interface AppState<T> extends NgxsDataEntityCollectionsRepository<T> {
  values$: Observable<T[]>;
  values: T[];
}

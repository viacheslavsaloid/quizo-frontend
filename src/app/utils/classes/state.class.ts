import { NgxsDataEntityCollectionsRepository } from '@ngxs-labs/data/repositories';
import { Computed, DataAction } from '@ngxs-labs/data/decorators';
import { map } from 'rxjs/operators';

export class AppState<T> extends NgxsDataEntityCollectionsRepository<T> {
  @Computed()
  public get values$() {
    return this.state$.pipe(map(() => this.selectAll()));
  }

  @Computed()
  public get values() {
    return this.selectAll();
  }

  @Computed()
  public get total$() {
    return this.state$.pipe(map((state: any) => state.total));
  }

  @Computed()
  public get total() {
    const totalField = 'total';
    return this.getState()[totalField];
  }

  @DataAction() setTotal(total) {
    this.ctx.setState((state) => ({ ...state, total }));
  }

  @DataAction() increaseTotal(i) {
    this.ctx.setState((state: any) => ({ ...state, total: state.total + i }));
  }
}

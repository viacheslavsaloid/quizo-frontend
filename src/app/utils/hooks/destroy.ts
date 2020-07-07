import { OnDestroy, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DestroyHook extends Subject<null> implements OnDestroy {
  ngOnDestroy() {
    this.next(null);
    this.complete();
  }
}

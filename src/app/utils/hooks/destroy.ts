import { OnDestroy, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgOnDestory$ extends Subject<null> implements OnDestroy {
  ngOnDestroy() {
    this.next(null);
    this.complete();
  }
}

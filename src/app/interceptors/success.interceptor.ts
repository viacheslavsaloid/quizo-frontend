import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { NotificationsService } from '../services/root';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
  private _notificationsService: NotificationsService;

  constructor(private _injector: Injector) {
    // hack for inject service after it imported to root.module.ts
    setTimeout(() => {
      this._notificationsService = this._injector.get(NotificationsService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          this._notificationsService.showSuccess(event);
        }
      })
    );
  }
}

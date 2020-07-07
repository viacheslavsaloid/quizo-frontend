import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppNotificationService } from '../services/core';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
  private _appNotificationService: AppNotificationService;
  private _showMethods = ['PATCH', 'POST', 'PUT', 'DELETE'];

  constructor(private _injector: Injector) {
    // hack for inject service after it imported to core.module.ts
    setTimeout(() => {
      this._appNotificationService = this._injector.get(AppNotificationService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (
          event instanceof HttpResponse &&
          this._showMethods.includes(req.method) &&
          (event.status === 201 || event.status === 200)
        ) {
          this._appNotificationService.showSuccess(req.method, event.status);
        }
      })
    );
  }
}

import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from '../services/root';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private _notificationsService: NotificationsService;

  constructor(private _injector: Injector) {
    // hack for inject service after it imported to root.module.ts
    setTimeout(() => {
      this._notificationsService = this._injector.get(NotificationsService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          this._notificationsService.showError(error);
        }
        return throwError(error);
      })
    );
  }
}

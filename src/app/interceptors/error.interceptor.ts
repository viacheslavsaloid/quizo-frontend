import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AppNotificationService } from '../services/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private _appNotificationService: AppNotificationService;

  constructor(private _injector: Injector) {
    // hack for inject service after it imported to core.module.ts
    setTimeout(() => {
      this._appNotificationService = this._injector.get(AppNotificationService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this._appNotificationService.showError(error.status, error.status);
        return throwError(error);
      })
    );
  }
}

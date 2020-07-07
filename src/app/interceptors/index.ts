import { ErrorInterceptor } from './error.interceptor';
import { SuccessInterceptor } from './success.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { RollbarErrorHandler, RollbarService, rollbarFactory } from './rollbar.interceptor';

export * from './error.interceptor';
export * from './success.interceptor';
export * from './rollbar.interceptor';

export const CORE_INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SuccessInterceptor,
    multi: true,
  },
  { provide: ErrorHandler, useClass: RollbarErrorHandler },
  { provide: RollbarService, useFactory: rollbarFactory },
];

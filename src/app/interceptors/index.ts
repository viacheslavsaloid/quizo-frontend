import { ErrorInterceptor } from './error.interceptor';
import { SuccessInterceptor } from './success.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export * from './error.interceptor';
export * from './success.interceptor';

export const ROOT_INTERCEPTORS = [
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
];

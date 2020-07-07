import { ErrorHandler, Injectable, Inject, InjectionToken } from '@angular/core';
import { ROLLBAR_CONFIGS } from 'src/app/settings/configs';
import * as Rollbar from 'rollbar';

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}
  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(ROLLBAR_CONFIGS);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

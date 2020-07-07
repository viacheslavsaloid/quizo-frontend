import { environment } from 'src/environments/environment';
import * as Rollbar from 'rollbar';

export const ROLLBAR_CONFIGS: Rollbar.Configuration = {
  accessToken: environment.rollbarToken,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: environment.production ? 'production' : 'develop',
};

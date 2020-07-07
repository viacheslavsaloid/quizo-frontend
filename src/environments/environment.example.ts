// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { getDomain } from 'src/app/utils/parsers';

const serverUrl = 'http://localhost:3000/';

const authEndpoint = 'auth/';

const apiEndpoint = 'api/';
const apiVersion = 'v1/';
const usersEndpoint = 'users/';

const domain = getDomain(serverUrl);

export const environment = {
  production: false,
  serverUrl,
  apiEndpoint,
  authEndpoint,
  usersEndpoint,
  apiUrl: `${serverUrl}${apiEndpoint}${apiVersion}`,
  authUrl: `${serverUrl}${authEndpoint}`,
  jwtWhitelist: [domain],
  rollbarToken: 'token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

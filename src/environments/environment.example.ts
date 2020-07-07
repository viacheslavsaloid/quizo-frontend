// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { getDomain } from 'src/app/utils/parsers';

const serverUrl = 'http://localhost:3000/';

const apiVersion = 'v1/';

const apiEndpoint = 'api/';
const authEndpoint = 'auth/';

const gamesEndpoint = 'games/';
const roundsEndpoint = 'rounds/';
const questionsEndpoint = 'questions/';
const answersEndpoint = 'answers/';
const usersEndpoint = 'users/';
const imagesEndpoint = 'images/';

const domain = getDomain(serverUrl);

export const environment = {
  production: false,
  serverUrl,
  apiUrl: `${serverUrl}${apiEndpoint}${apiVersion}`,
  authEndpoint,
  gamesEndpoint,
  roundsEndpoint,
  questionsEndpoint,
  answersEndpoint,
  usersEndpoint,
  imagesEndpoint,
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

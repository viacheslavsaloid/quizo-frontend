import { getDomain } from 'src/app/utils/parsers';

const serverUrl = 'http://localhost:3000/';

const authEndpoint = 'auth/';

const apiEndpoint = 'api/';
const apiVersion = 'v1/';

const domain = getDomain(serverUrl);

export const environment = {
  production: true,
  serverUrl,
  apiEndpoint,
  authEndpoint,
  apiUrl: `${serverUrl}${apiEndpoint}${apiVersion}`,
  authUrl: `${serverUrl}${authEndpoint}`,
  jwtWhitelist: [domain],
};

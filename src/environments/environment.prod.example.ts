import { getDomain } from 'app/utils/parsers';

const serverUrl = 'http://localhost:3000/';

const authEndpoint = 'auth/';

const apiEndpoint = 'api/';
const apiVersion = 'v1/';

const contactsEndpoint = 'contacts/';
const productsEndpoint = 'products/';

const domain = getDomain(serverUrl);

export const environment = {
  production: true,
  serverUrl,
  apiEndpoint,
  authEndpoint,
  contactsEndpoint,
  productsEndpoint,
  apiUrl: `${serverUrl}${apiEndpoint}${apiVersion}`,
  authUrl: `${serverUrl}${authEndpoint}`,
  jwtWhitelist: [domain],
};

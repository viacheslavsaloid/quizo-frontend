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

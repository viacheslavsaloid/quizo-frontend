import { routesTypeDefinition } from 'app/utils/types';

const BASE_URL = '/auth';

export const AUTH_ROUTES = routesTypeDefinition({
  SIGN_IN: {
    path: 'sign-in',
    fullPath: `${BASE_URL}/sign-in`,
  },
  SIGN_UP: {
    path: 'sign-up',
    fullPath: `${BASE_URL}/sign-up`,
  },
  FORGOT_PASSWORD: {
    path: 'forgot-password',
    fullPath: `${BASE_URL}/forgot-password`,
  },
});

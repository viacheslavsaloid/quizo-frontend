import { routesTypeDefinition } from 'src/app/utils/types';

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
  RESTORE_PASSWORD: {
    path: 'restore-password',
    fullPath: `${BASE_URL}/restore-password`,
  },
});

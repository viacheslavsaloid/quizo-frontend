import { AUTH_ROUTES } from '../../../../src/app/routes/auth/auth.routes';

const SIGN_IN_LINKS = [
  {
    title: 'PAGES.SIGN_UP',
    routeTo: AUTH_ROUTES.SIGN_UP.fullPath,
  },
  {
    title: 'PAGES.RESTORE_PASSWORD',
    routeTo: AUTH_ROUTES.RESTORE_PASSWORD.fullPath,
  },
];
const SIGN_UP_LINKS = [
  {
    title: 'PAGES.SIGN_IN',
    routeTo: AUTH_ROUTES.SIGN_IN.fullPath,
  },
  {
    title: 'PAGES.RESTORE_PASSWORD',
    routeTo: AUTH_ROUTES.RESTORE_PASSWORD.fullPath,
  },
];
const RESTORE_PASSWORD_LINKS = [
  {
    title: 'PAGES.SIGN_IN',
    routeTo: AUTH_ROUTES.SIGN_IN.fullPath,
  },
  {
    title: 'PAGES.SIGN_UP',
    routeTo: AUTH_ROUTES.SIGN_UP.fullPath,
  },
];

export default {
  sign_in: SIGN_IN_LINKS,
  sign_up: SIGN_UP_LINKS,
  restore_password: RESTORE_PASSWORD_LINKS,
};

import { AUTH_FORMS } from './auth';
import { ADMIN_FORMS } from './admin';

export const APP_FORMS = {
  ...AUTH_FORMS,
  ...ADMIN_FORMS,
};

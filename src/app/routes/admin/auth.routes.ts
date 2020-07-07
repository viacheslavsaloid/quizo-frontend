import { routesTypeDefinition } from 'src/app/utils/types';

const BASE_URL = '/admin';

export const ADMIN_ROUTES = routesTypeDefinition({
  DASHBOARD: {
    path: 'dashboard',
    fullPath: `${BASE_URL}/dashboard`,
  },
});

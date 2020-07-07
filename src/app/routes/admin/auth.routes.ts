import { routesTypeDefinition } from 'app/utils/types';

const BASE_URL = '/admin';

export const ADMIN_ROUTES = routesTypeDefinition({
  DASHBOARD: {
    path: 'dashboard',
    fullPath: `${BASE_URL}/dashboard`,
  },
  CONTACTS: {
    path: 'contacts',
    fullPath: `${BASE_URL}/contacts`,
  },
  CONTACT: {
    path: 'contacts/:id',
    fullPath: `${BASE_URL}/contacts/:id`,
  },
  PRODUCTS: {
    path: 'products',
    fullPath: `${BASE_URL}/products/`,
  },
  PRODUCT: {
    path: 'products/:id',
    fullPath: `${BASE_URL}/products/:id`,
  },
  USERS: {
    path: 'users',
    fullPath: `${BASE_URL}/users/`,
  },
});

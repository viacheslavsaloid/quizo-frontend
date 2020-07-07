import { routesTypeDefinition } from 'src/app/utils/types';

const BASE_URL = '/admin';

export const ADMIN_ROUTES = routesTypeDefinition({
  HOME: {
    path: 'home',
    fullPath: `${BASE_URL}/home`,
    inNav: true,
    title: 'HOME',
    icon: 'home',
  },
  DASHBOARD: {
    path: 'dashboard',
    fullPath: `${BASE_URL}/dashboard`,
    inNav: true,
    title: 'DASHBOARD',
    icon: 'dashboard',
  },
  SETTINGS: {
    path: 'settings',
    fullPath: `${BASE_URL}/settings`,
    inNav: true,
    title: 'SETTINGS',
    icon: 'settings',
  },
  USERS: {
    path: 'users',
    fullPath: `${BASE_URL}/users`,
    inNav: false,
  },
  USER: {
    path: 'users/:id',
    fullPath: `${BASE_URL}/users/:id`,
    inNav: false,
  },
});

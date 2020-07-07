import { FuseNavigation } from '@fuse/types';
import { ADMIN_ROUTES } from './auth.routes';

export const ADMIN_NAVIGATION: FuseNavigation[] = [
  {
    id: 'pages',
    title: 'Pages',
    translate: 'NAV.PAGES.TITLE',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        translate: 'NAV.PAGES.DASHBOARD',
        type: 'item',
        icon: 'dashboard',
        url: ADMIN_ROUTES.DASHBOARD.fullPath,
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'NAV.PAGES.CONTACTS',
        type: 'item',
        icon: 'contacts',
        url: ADMIN_ROUTES.CONTACTS.fullPath,
      },
      {
        id: 'products',
        title: 'Products',
        translate: 'NAV.PAGES.PRODUCTS',
        type: 'item',
        icon: 'shopping_cart',
        url: ADMIN_ROUTES.PRODUCTS.fullPath,
      },
      {
        id: 'users',
        title: 'Users',
        translate: 'NAV.PAGES.USERS',
        type: 'item',
        icon: 'people',
        url: ADMIN_ROUTES.USERS.fullPath,
      },
    ],
  },
];

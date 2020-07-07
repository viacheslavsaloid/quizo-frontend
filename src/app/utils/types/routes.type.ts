// helper for autocomplete. ROOT_ROUTES. -> ADMIN, AUTH

import { AppRoutes } from 'app/models/routes';

export const routesTypeDefinition = <T extends AppRoutes>(types: T): T => types;

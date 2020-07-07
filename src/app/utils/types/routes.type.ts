// helper for autocomplete. CORE_ROUTES. -> ADMIN, AUTH

import { AppRoutes } from 'src/app/models/utils';

export const routesTypeDefinition = <T extends AppRoutes>(types: T): T => types;

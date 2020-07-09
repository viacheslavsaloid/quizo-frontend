import { routesTypeDefinition } from 'src/app/utils/types';

const BASE_URL = '';

export const CLIENT_ROUTES = routesTypeDefinition({
  GAMES: {
    path: 'games',
    fullPath: `/${BASE_URL}/games`,
  },
  GAME: {
    path: 'games/:id',
    fullPath: `/${BASE_URL}/games/:id`,
  },
  GAME_PLAY: {
    path: '',
    fullPath: `/${BASE_URL}/games/:id`,
  },
  GAME_AUTH: {
    path: 'auth',
    fullPath: `/${BASE_URL}/games/:id/auth`,
  },
});

import { GamesComponent } from './games/games.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { GameAuthComponent } from './game-auth/game-auth.component';

export * from './games/games.component';
export * from './game-play/game-play.component';
export * from './game-auth/game-auth.component';

export const CLIENT_PAGES = [GamesComponent, GamePlayComponent, GameAuthComponent];

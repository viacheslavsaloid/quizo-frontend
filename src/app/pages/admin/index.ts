import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminGameComponent } from './admin-game/admin-game.component';
import { AdminRoundComponent } from './admin-round/admin-round.component';
import { AdminPlayerComponent } from './admin-player/admin-player.component';

export * from './admin-games/admin-games.component';
export * from './admin-game/admin-game.component';
export * from './admin-round/admin-round.component';
export * from './admin-player/admin-player.component';

export const ADMIN_PAGES = [AdminGamesComponent, AdminGameComponent, AdminRoundComponent, AdminPlayerComponent];

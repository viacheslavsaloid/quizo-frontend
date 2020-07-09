import { AuthGuard } from './auth.guard';
import { GameAccessGuard } from './game-access.guard';
import { IsGameGuard } from './is-game.guard';

export * from './auth.guard';
export * from './game-access.guard';
export * from './is-game.guard';

export const CORE_GUARDS = [AuthGuard];
export const GAMES_GUARDS = [GameAccessGuard, IsGameGuard];

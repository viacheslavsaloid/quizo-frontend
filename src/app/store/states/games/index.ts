import { GamesState } from './game.state';
import { RoundsState } from './round.state';
import { QuestionsState } from './question.state';
import { PlayersState } from './players.state';

export * from './game.state';
export * from './round.state';
export * from './question.state';
export * from './players.state';

export const GAMES_STATES = [GamesState, RoundsState, QuestionsState, PlayersState];

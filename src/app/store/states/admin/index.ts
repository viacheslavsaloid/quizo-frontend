import { GamesState } from './game.state';
import { RoundsState } from './round.state';
import { QuestionsState } from './question.state';

export * from './game.state';
export * from './round.state';
export * from './question.state';

export const ADMIN_STATES = [GamesState, RoundsState, QuestionsState];

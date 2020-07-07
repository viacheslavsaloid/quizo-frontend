import { QuestionsService } from './questions/questions.service';
import { RoundsService } from './rounds/rounds.service';
import { GamesService } from './games/games.service';

export * from './questions/questions.service';
export * from './rounds/rounds.service';
export * from './games/games.service';

export const GAMES_SERVICES = [GamesService, RoundsService, QuestionsService];

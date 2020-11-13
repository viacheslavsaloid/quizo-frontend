import { QuestionsService } from './questions/questions.service';
import { RoundsService } from './rounds/rounds.service';
import { GamesService } from './games/games.service';
import { PlayersService } from './players/players.service';

export { QuestionsService } from './questions/questions.service';
export { RoundsService } from './rounds/rounds.service';
export { GamesService } from './games/games.service';
export { PlayersService } from './players/players.service';

export const GAMES_SERVICES = [GamesService, RoundsService, QuestionsService, PlayersService];

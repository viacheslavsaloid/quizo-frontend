import { Game } from './games/game.model';
import { Question } from './question.model';
import { User } from '../auth';

export interface Player {
  id: string;
  name: string;
  hints: string[];
  order: number;
  questions: Question[];
  game: Game;
  history: any[];
  user: User;
  team: Player[];
  leader: Player;
  role: 'leader' | 'team';
}

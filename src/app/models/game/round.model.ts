import { Game } from './games/game.model';
import { Question } from './question.model';

export interface Round {
  id: string;
  name: string;
  hints: string[];
  order: number;
  questions: Question[];
  game: Game;
}

import { Round } from './round.model';
import { Answer } from './answer.model';

export interface Question {
  id: string;
  data: string;
  correctAnswer: string;
  answers: Answer[];
  round: Round;
  order: number;
}

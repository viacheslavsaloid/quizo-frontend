import { Question } from './question.model';
import { User } from '../auth';

export interface Answer {
  id: string;
  data: string;
  question: Question;
  user: User;
}

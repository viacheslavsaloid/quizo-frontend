import { GameType } from './game-type.enum';
import { User } from '../../auth';
import { Round } from '../round.model';

export interface Game {
  id: string;
  name: string;
  activeRound: string;
  private: boolean;
  background: string;
  logo: string;
  preview: string;
  type: GameType;
  rounds: Round[];
  players: [
    {
      id: string;
      access: boolean;
      user: User;
    }
  ];
  owner: User;
}

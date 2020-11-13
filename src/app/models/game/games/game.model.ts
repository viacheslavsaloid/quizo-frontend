import { GameType } from './game-type.enum';
import { User } from '../../auth';
import { Round } from '../round.model';
import { Player } from '../player.model';

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
  players: Player[];
  owner: User;
  teammates: Player[];
}

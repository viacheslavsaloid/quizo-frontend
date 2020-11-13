import { Game } from './game.model';
import { User } from '../../auth';
import { TokenModel, IdModel, AccessModel } from '../../utils';

export interface GiveAccessArgs {
  game: Game;
  user: User;
}

export interface RegisterToGameArgs extends IdModel, TokenModel {}
export interface HasAccessResponse extends AccessModel {}
export interface GenerateTokenArgs extends IdModel {}
export interface GenerateTokenResponse extends TokenModel {}
export interface GenerateTeammateTokenArgs extends IdModel {
  userId: string;
}
export interface GenerateTeammateTokenResponse extends TokenModel {}
export interface HasAccessArgs extends IdModel {}
export interface HasAccessResponse extends AccessModel {}

export type GiveAccessResponse = boolean;
export type RegisterToGameResponse = boolean;

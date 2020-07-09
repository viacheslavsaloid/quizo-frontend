import { NgModule } from '@angular/core';
import { GAMES_SERVICES } from '../services/game';
import { NgxsModule } from '@ngxs/store';
import { GAMES_STATES } from '../store/states/games';
import { GAMES_GUARDS } from '../guards';

const GAMES_IMPORTS = [NgxsModule.forFeature(GAMES_STATES)];
const GAMES_PROVIDERS = [...GAMES_SERVICES, ...GAMES_GUARDS];

@NgModule({
  imports: GAMES_IMPORTS,
  providers: GAMES_PROVIDERS,
})
export class GamesModule {}

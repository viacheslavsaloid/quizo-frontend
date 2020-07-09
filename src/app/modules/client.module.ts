import { NgModule } from '@angular/core';

import { ClientRoutingModule } from '../routes/client/client-routing.module';
import { SharedModule } from './shared.module';
import { CLIENT_PAGES } from '../pages/client';
import { ClientComponent } from '../containers/client/client.component';
import { GamesModule } from './games.module';
import { GameComponent } from '../containers/game/game.component';

const CLIENT_DECLARATIONS = [ClientComponent, GameComponent, ...CLIENT_PAGES];
const CLIENT_IMPORTS = [SharedModule, GamesModule, ClientRoutingModule];

@NgModule({
  declarations: CLIENT_DECLARATIONS,
  imports: CLIENT_IMPORTS,
})
export class ClientModule {}

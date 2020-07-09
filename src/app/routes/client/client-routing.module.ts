import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from 'src/app/containers/client/client.component';
import { CLIENT_ROUTES } from './client.routes';
import { GamesComponent } from 'src/app/pages/client/games/games.component';
import { GameComponent } from 'src/app/containers/game/game.component';
import { GameAuthComponent, GamePlayComponent } from 'src/app/pages/client';
import { GameAccessGuard, IsGameGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: CLIENT_ROUTES.GAMES.path,
        pathMatch: 'full',
      },
      {
        path: CLIENT_ROUTES.GAMES.path,
        component: GamesComponent,
      },
      {
        path: CLIENT_ROUTES.GAME.path,
        canActivate: [IsGameGuard],
        component: GameComponent,
        children: [
          {
            path: CLIENT_ROUTES.GAME_AUTH.path,
            component: GameAuthComponent,
          },
          {
            path: CLIENT_ROUTES.GAME_PLAY.path,
            canActivate: [GameAccessGuard],
            component: GamePlayComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

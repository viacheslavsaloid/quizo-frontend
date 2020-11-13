import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/containers/admin/admin.component';
import {
  AdminGamesComponent,
  AdminGameComponent,
  AdminRoundComponent,
  AdminPlayerComponent,
} from 'src/app/pages/admin';
import { ADMIN_ROUTES } from './admin.routes';
import { GameType } from 'src/app/models/game';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: ADMIN_ROUTES.QUESTS.path,
        pathMatch: 'full',
      },
      {
        path: ADMIN_ROUTES.QUESTS.path,
        component: AdminGamesComponent,
        data: {
          type: GameType.QUEST,
        },
      },
      {
        path: ADMIN_ROUTES.QUEST.path,
        component: AdminGameComponent,
        data: {
          type: GameType.QUEST,
        },
      },
      {
        path: ADMIN_ROUTES.QUEST_ROUND.path,
        component: AdminRoundComponent,
        data: {
          type: GameType.QUEST,
        },
      },
      {
        path: ADMIN_ROUTES.QUIZZES.path,
        component: AdminGamesComponent,
        data: {
          type: GameType.QUIZ,
        },
      },
      {
        path: ADMIN_ROUTES.QUIZ.path,
        component: AdminGameComponent,
        data: {
          type: GameType.QUIZ,
        },
      },
      {
        path: ADMIN_ROUTES.QUIZ_ROUND.path,
        component: AdminRoundComponent,
        data: {
          type: GameType.QUIZ,
        },
      },
      {
        path: ADMIN_ROUTES.QUIZ_PLAYER.path,
        component: AdminPlayerComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

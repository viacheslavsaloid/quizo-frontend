import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GamesService, PlayersService } from 'src/app/services/game';
import * as moment from 'moment';
import { Player } from '../../../models/game/player.model';
import { Tab } from '../../../models/components/tabs';
import { ActionsComponent, TableComponent } from '../../../components/shared/layout';
import { Clipboard } from '@angular/cdk/clipboard';
import { AppNotificationService } from '../../../services/core';

@UntilDestroy()
@Component({
  selector: 'app-admin-player',
  templateUrl: './admin-player.component.html',
  styleUrls: ['./admin-player.component.scss'],
})
export class AdminPlayerComponent implements OnInit {
  public player: Player;

  public tabs: Tab[];
  public gameId: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _playersService: PlayersService,
    private _gamesService: GamesService,
    private _clipboard: Clipboard,
    private _appNotificationsService: AppNotificationService
  ) {}

  private getTabs(): Tab[] {
    const HISTORY_TAB = {
      name: 'HISTORY',
      component: TableComponent,
      inputs: {
        columns: [
          { prop: 'date', name: 'Дата' },
          { prop: 'action', name: 'Действие' },
          { prop: 'description', name: 'Описание' },
        ],
        rows: this.player.history.map((log) => ({
          ...log,
          date: moment(log.date).format('MMMM Do YYYY, h:mm:ss a'),
        })),
      },
    };

    const ACTIONS_TAB = {
      name: 'ACTIONS',
      component: ActionsComponent,
      inputs: {
        actions: [
          {
            name: 'Сгенерировать Токен Команде',
            color: 'primary',
            onClick: () => this.generateTeammateToken(this.gameId),
          },
        ],
      },
    };

    const TEAM_TAB = {
      name: 'TEAM',
      component: TableComponent,
      inputs: {
        columns: [
          { prop: 'token', name: 'Токен' },
          { prop: 'name', name: 'Имя' },
        ],
        rows: this.player.team.map((player) => ({
          token: player.id,
          name: player.leader?.user?.name,
        })),
      },
    };

    return [HISTORY_TAB, ACTIONS_TAB, TEAM_TAB];
  }

  public async generateTeammateToken(gameId: string) {
    const { token } = await this._gamesService.generateTeammateToken({ id: gameId, userId: this.player.id });
    this._clipboard.copy(token);
    this._appNotificationsService.showSuccess('Токен сгенерирован и скопирован');
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(async (params) => {
      const id: string = params['playerId'];
      this.gameId = params['gameId'];

      this.player = await this._playersService.getOne({ id });

      this.tabs = this.getTabs();
    });
  }
}

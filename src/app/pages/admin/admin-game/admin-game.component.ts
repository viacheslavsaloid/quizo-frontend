import { Component, OnInit } from '@angular/core';
import { NgOnDestory$ } from 'src/app/hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService, RoundsService } from 'src/app/services/game';
import { Observable, combineLatest } from 'rxjs';
import { Tab } from 'src/app/models/components/tabs';
import { AppNotificationService } from 'src/app/services/core';
import { ADMIN_ROUTES } from 'src/app/routes/admin/auth.routes';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from 'src/environments/environment';
import { FormlyFormComponent, ListComponent, TableComponent, ActionsComponent } from 'src/app/components/shared';
import { FormGroup } from '@angular/forms';
import { takeUntil, map, tap } from 'rxjs/operators';
import { GameType, Game, Round } from 'src/app/models/game';
import { ADMIN_FORMS } from 'src/assets/forms/admin';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.scss'],
})
export class AdminGameComponent implements OnInit {
  public tabs: Tab[];

  public rounds$: Observable<Round[]>;

  public gameForm;

  public game: Game;

  public type: GameType;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _activatedRoute: ActivatedRoute,
    private _gamesService: GamesService,
    private _roundsService: RoundsService,
    private _appNotificationsService: AppNotificationService,
    private _clipboard: Clipboard,
    private _router: Router
  ) {}

  public onAddRound() {
    const fields = `${this.type}_round`;
    this._roundsService.openPopupAndAddOne({
      translateTitle: fields.toUpperCase(),
      addToValue: { game: this.game },
      fields,
    });
  }

  public async onGameDelete(game: Game) {
    await this._gamesService.removeOne({ id: game.id });
    const navigate = game.type === GameType.QUIZ ? 'QUIZZES' : 'QUESTS';
    this._router.navigate([ADMIN_ROUTES[navigate].fullPath]);
  }

  public onGameUpdate(game: Game, changes: Game) {
    this._gamesService.updateOne({ id: game.id, changes });
  }

  public onTokenCopy(token) {
    this._clipboard.copy(token);
    this._appNotificationsService.showSuccess({ message: 'Токен скопирован' });
  }

  public async onAccessToogle(game, user) {
    await this._gamesService.giveAccess({ game, user });
    this._appNotificationsService.showSuccess('Доступ', 'Доступ успешно изменен');
  }

  public async onTokenGenerate(game) {
    const { token } = await this._gamesService.generateToken({ id: game.id });
    this._clipboard.copy(token);
    this._appNotificationsService.showSuccess('Токен сгенерирован и скопирован');
  }

  public onLinkCopy(game) {
    this._clipboard.copy(`${environment.serverUrl}${ADMIN_ROUTES.QUEST.fullPath.replace(':id', game.id)}`);
    this._appNotificationsService.showSuccess('Ссылка успешно скопирована');
  }

  public onRoundToogle(round) {
    this._roundsService.toogle(round.id);
  }

  public async getTabs(type: GameType, game: Game): Promise<Tab[]> {
    const settingsTab = {
      name: 'SETTINGS',
      component: FormlyFormComponent,
      inputs: {
        fields: `${type}_settings`,
        model: game,
      },
      outputs: {
        submited: (changes) => this.onGameUpdate(game, changes),
        deleted: () => this.onGameDelete(game),
      },
    };

    const listTab = {
      name: 'ROUNDS',
      component: ListComponent,
      inputs: {
        items$: this.rounds$,
        fabTrigger: {
          icon: 'add',
          func: () => this.onAddRound(),
        },
      },
      outputs: {
        sorted: (rounds) => this._roundsService.sort(rounds),
        clicked: (round) => this._roundsService.navigateToRound(game, round),
      },
    };

    const playersTab = {
      name: 'PLAYERS',
      component: TableComponent,
      inputs: {
        columns: [{ prop: 'token' }, { prop: 'name' }, { prop: 'hints' }, { prop: 'time' }],
        rows: game.players.map((player) => {
          const hints = player.history.filter((x) => x.action === 'hint').length;
          const startDate = player.history.find((x) => x.action === 'start_game')?.date;

          const exitDate = player.history.find((x) => x.action === 'exit_game')?.date;

          const momentStartDate = moment(startDate);
          const momentExitDate = moment(exitDate);

          const hours = momentExitDate.diff(momentStartDate, 'hours');
          const minutes = momentExitDate.diff(momentStartDate, 'minutes') - hours * 60;
          const seconds = momentExitDate.diff(momentStartDate, 'seconds') - minutes * 60;

          return {
            token: player.id,
            name: player.user.name,
            hints,
            time: `${exitDate ? 'Finished' : 'Still in game'} ${hours}:${minutes}:${seconds}`,
          };
        }),
      },
      outputs: {
        selected: (row) => {
          console.log(row);
        },
        activated: (e) => {
          if (e.type === 'click') {
            this._router.navigateByUrl(ADMIN_ROUTES.PLAYER.fullPath.replace(':id', e.row.token));
          }
        },
      },
    };

    const gameTab = {
      name: 'GAME',
      component: ActionsComponent,
      inputs: {
        actions: [
          {
            name: 'Сгенерировать Токен',
            color: 'warn',
            onClick: () => this.onTokenGenerate(game),
          },
          {
            name: 'Скопировать ссылку',
            color: 'primary',
            onClick: () => this.onLinkCopy(game),
          },
          {
            name: 'Перейти на страницу игры',
            onClick: () => this._gamesService.navigateToItem(game),
          },
        ],
      },
    };

    const game$ = this._gamesService.getOne$({ id: game.id });

    const tabs = {
      [GameType.QUIZ]: [
        {
          name: 'START',
          component: ListComponent,
          inputs: {
            items$: combineLatest([this.rounds$, game$]).pipe(
              map(([rounds, changeGame]) =>
                rounds.map((round) => (changeGame.activeRound === round.id ? { ...round, isActive: true } : round))
              )
            ),
          },
          outputs: {
            clicked: this.onRoundToogle.bind(this),
          },
        },
      ],
      [GameType.QUEST]: [
        {
          name: 'MESSAGES',
          component: FormlyFormComponent,
          inputs: {
            model: game,
            fields: 'quest_messages',
          },
          outputs: {
            submited: (changes) => this._gamesService.updateOne({ id: game.id, changes }),
          },
        },
      ],
    };

    return [listTab, ...tabs[type], gameTab, playersTab, settingsTab];
  }

  async ngOnInit() {
    this.gameForm = new FormGroup({});

    this._activatedRoute.params.pipe(takeUntil(this._ngOnDestroy$)).subscribe(async (params) => {
      const id: string = params['id'];
      this.type = this._activatedRoute.snapshot.data['type'] as GameType;

      this.game = await this._gamesService.getOne({ id });

      this.rounds$ = this._roundsService
        .getMany$({ filter: { game: id } })
        .pipe(map((rounds) => rounds.sort((a, b) => a.order - b.order)));

      this.tabs = await this.getTabs(this.type, this.game);
    });
  }
}

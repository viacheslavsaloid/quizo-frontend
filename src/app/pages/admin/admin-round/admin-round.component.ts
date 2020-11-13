import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionsService, RoundsService } from 'src/app/services/game';
import { NgOnDestory$ } from 'src/app/hooks';
import { GameType, Question, Round } from 'src/app/models/game';
import { Observable } from 'rxjs';
import { Tab } from 'src/app/models/components/tabs';
import { ADMIN_ROUTES } from 'src/app/routes/admin/admin.routes';
import { ListComponent, FormlyFormComponent } from 'src/app/components/shared';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-round',
  templateUrl: './admin-round.component.html',
  styleUrls: ['./admin-round.component.scss'],
})
export class AdminRoundComponent implements OnInit {
  public tabs: Tab[];

  public round: Round;
  public questions$: Observable<Question[]>;
  public type: GameType;

  constructor(
    private _ngOnDestroy$: NgOnDestory$,
    private _activatedRoute: ActivatedRoute,
    private _roundsService: RoundsService,
    private _questionsService: QuestionsService,
    private _router: Router
  ) {}

  public getAddTitle = () => this.type.toLocaleUpperCase() + '.ADD';

  public onAddQuestion() {
    const fields = `${this.type}_round_question`;

    this._questionsService.openPopupAndAddOne({
      addToValue: { round: this.round },
      translateTitle: fields.toUpperCase(),
      fields,
    });
  }

  public onUpdateQuestion(question) {
    const fields = `${this.type}_round_question`;

    this._questionsService.openPopupAndUpdateOne({
      model: question,
      translateTitle: fields.toUpperCase(),
      fields,
    });
  }

  public async onRoundDelete({ id, game }) {
    await this._roundsService.removeOne({ id });
    this._router.navigate([ADMIN_ROUTES[game.type.toUpperCase()].fullPath.replace(':id', game.id)]);
  }

  private async getTabs(args): Promise<Tab[]> {
    const { round, type } = args;

    const listTab = {
      name: 'QUESTIONS',
      component: ListComponent,
      inputs: {
        items$: this.questions$.pipe(map((questions) => questions.sort((a, b) => a.order - b.order))),
        fabTrigger: {
          icon: 'add',
          func: () => this.onAddQuestion(),
        },
      },
      outputs: {
        sorted: (rounds) => this._questionsService.sort(rounds),
        clicked: this.onUpdateQuestion.bind(this),
      },
    };

    const settingsTab = {
      name: 'SETTINGS',
      component: FormlyFormComponent,
      inputs: {
        fields: `${type}_round_settings`,
        model: round,
      },
      outputs: {
        submited: (changes) => this._roundsService.updateOne({ id: round.id, changes }),
        deleted: () => this.onRoundDelete({ id: round.id, game: { type, id: round.game.id } }),
      },
    };

    const tabs = {
      [GameType.QUIZ]: [],
      [GameType.QUEST]: [
        {
          name: 'ANSWER',
          component: FormlyFormComponent,
          inputs: {
            fields: `${type}_round_answer`,
            model: round,
          },
          outputs: {
            submited: (changes) => this._roundsService.updateOne({ id: round.id, changes }),
          },
        },
        {
          name: 'HINTS',
          component: FormlyFormComponent,
          inputs: {
            model: round,
            fields: 'quest_round_hints',
          },
          outputs: {
            submited: (changes) => this._roundsService.updateOne({ id: round.id, changes }),
          },
        },
      ],
    };

    return [listTab, ...tabs[type], settingsTab];
  }

  async ngOnInit() {
    this._activatedRoute.params.pipe(takeUntil(this._ngOnDestroy$)).subscribe(async (params) => {
      const id = params['roundId'] as string;
      this.type = this._activatedRoute.snapshot.data['type'] as GameType;

      this.round = await this._roundsService.getOne({ id });

      this.questions$ = this._questionsService.getMany$({ filter: { round: id } });

      this.tabs = await this.getTabs({ round: this.round, type: this.type });
    });
  }
}

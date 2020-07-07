import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgOnDestory$ } from 'src/app/hooks';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GamesService } from 'src/app/services/game';
import { AuthService } from 'src/app/services/core';
import { FabTrigger } from 'src/app/models/components/fab';
import { Game, GameType } from 'src/app/models/game';

@Component({
  selector: 'app-admin-games',
  templateUrl: './admin-games.component.html',
  styleUrls: ['./admin-games.component.scss'],
})
export class AdminGamesComponent implements OnInit {
  public games$: Observable<Game[]>;
  public searchInput: FormControl;

  public title: string;
  public type: GameType;

  public fabTrigger: FabTrigger;

  constructor(
    private _route: ActivatedRoute,
    private _ngOnDestroy$: NgOnDestory$,
    private _authService: AuthService,
    private _gamesService: GamesService
  ) {}

  public onAddClick(): void {
    this._gamesService.openPopupAndAddOne({
      fields: this.type,
      translateTitle: this.type.toUpperCase(),
      addToValue: { type: this.type },
    });
  }

  public onGameClick(game: Game) {
    this._gamesService.navigateToItem(game.id);
  }

  public onSort(games: Game[]) {
    this._gamesService.sort(games);
  }

  ngOnInit(): void {
    const typeField = 'type';
    this.type = this._route.snapshot.data[typeField] as GameType;
    this.title = this.type === GameType.QUEST ? 'QUESTS' : 'QUIZZES';

    this.fabTrigger = {
      icon: 'add',
      func: () => this.onAddClick(),
    };

    this.searchInput = new FormControl('');

    this.games$ = this.searchInput.valueChanges.pipe(
      startWith(''),
      takeUntil(this._ngOnDestroy$),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((e) =>
        this._gamesService.getMany$({ filter: { owner: this._authService.user.id, type: this.type, name: e } })
      )
    );
  }
}
